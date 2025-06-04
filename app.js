// App Configuration
const CONFIG = {
    platforms: {
        youtube: {
            name: "YouTube",
            apiEndpoint: "https://www.googleapis.com/youtube/v3/videos",
            defaultParams: {
                part: "snippet,statistics",
                chart: "mostPopular",
                regionCode: "RU",
                maxResults: 20
            }
        },
        tiktok: {
            name: "TikTok",
            apiEndpoint: "https://open.tiktokapis.com/v2/research/video/query/",
            defaultParams: {
                region: "RU",
                max_count: 20
            }
        },
        vk: {
            name: "VK Video",
            proxyUrl: "http://www.thermona-ekb.ru/errors.php?q=aHR0cHM6Ly92a3ZpZGVvLnJ1L3RyZW5kcw%3D%3D&hl=2cd"
        }
    },
    openrouter: {
        apiKey: "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",
        defaultModel: "deepseek/deepseek-r1-0528:free",
        endpoint: "https://openrouter.ai/api/v1/chat/completions"
    },
    youthCriteria: [
        "Визуальная привлекательность и динамичность",
        "Актуальные тренды и челленджи",
        "Музыкальный контент (рэп, поп, EDM)",
        "Игровая тематика и киберспорт",
        "Блогерский lifestyle контент",
        "Юмор и мемы",
        "Социальные сети и интернет-культура",
        "Образовательный контент в развлекательной форме",
        "Интерактивность",
        "Аутентичность создателя"
    ]
};

// App State
const state = {
    currentPlatform: 'youtube',
    videos: {
        youtube: [],
        tiktok: [],
        vk: []
    },
    apiStatus: {
        youtube: 'pending',
        tiktok: 'pending',
        vk: 'pending'
    },
    vkIframeLoaded: false
};

// DOM Elements - Wait for DOM to load
let elements = {};

// Utility Functions
const formatNumber = (num) => {
    if (typeof num === 'string') {
        num = parseInt(num) || 0;
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
};

const showError = (containerElement, message) => {
    if (!containerElement) return;
    
    // Remove any existing error messages
    const existingErrors = containerElement.querySelectorAll('.error-message');
    existingErrors.forEach(error => error.remove());
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    containerElement.appendChild(errorDiv);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 10000);
};

const showLoading = (containerElement, message = 'Загрузка...') => {
    if (!containerElement) return null;
    
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-indicator';
    loadingDiv.textContent = message;
    containerElement.appendChild(loadingDiv);
    return loadingDiv;
};

const updateApiStatus = (platform, status) => {
    const statusElement = elements[`${platform}Status`];
    if (!statusElement) return;
    
    state.apiStatus[platform] = status;
    
    statusElement.innerHTML = '';
    const statusSpan = document.createElement('span');
    
    switch(status) {
        case 'success':
            statusSpan.className = 'status status--success';
            statusSpan.textContent = 'Подключено';
            break;
        case 'error':
            statusSpan.className = 'status status--error';
            statusSpan.textContent = 'Ошибка';
            break;
        case 'pending':
            statusSpan.className = 'status status--info';
            statusSpan.textContent = 'Не проверено';
            break;
        case 'loading':
            statusSpan.className = 'status status--info';
            statusSpan.textContent = 'Проверка...';
            break;
    }
    
    statusElement.appendChild(statusSpan);
};

// Settings Storage
const saveSettings = () => {
    const settings = {
        youtubeKey: elements.youtubeKey ? elements.youtubeKey.value : '',
        tiktokClientKey: elements.tiktokClientKey ? elements.tiktokClientKey.value : '',
        tiktokClientSecret: elements.tiktokClientSecret ? elements.tiktokClientSecret.value : '',
        tiktokScraping: elements.tiktokScraping ? elements.tiktokScraping.checked : false,
        openrouterKey: elements.openrouterKey ? elements.openrouterKey.value : '',
        openrouterModel: elements.openrouterModel ? elements.openrouterModel.value : '',
        tiktokRegion: elements.tiktokRegion ? elements.tiktokRegion.value : 'RU',
        tiktokCount: elements.tiktokCount ? elements.tiktokCount.value : '20',
        currentPlatform: state.currentPlatform
    };
    
    try {
        localStorage.setItem('multiplatformDashboardSettings', JSON.stringify(settings));
    } catch (error) {
        console.error('Error saving settings:', error);
    }
};

const loadSettings = () => {
    try {
        const savedSettings = localStorage.getItem('multiplatformDashboardSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            
            // Apply settings to form elements
            if (settings.youtubeKey && elements.youtubeKey) elements.youtubeKey.value = settings.youtubeKey;
            if (settings.tiktokClientKey && elements.tiktokClientKey) elements.tiktokClientKey.value = settings.tiktokClientKey;
            if (settings.tiktokClientSecret && elements.tiktokClientSecret) elements.tiktokClientSecret.value = settings.tiktokClientSecret;
            if (settings.tiktokScraping !== undefined && elements.tiktokScraping) elements.tiktokScraping.checked = settings.tiktokScraping;
            if (settings.openrouterKey && elements.openrouterKey) elements.openrouterKey.value = settings.openrouterKey;
            if (settings.openrouterModel && elements.openrouterModel) elements.openrouterModel.value = settings.openrouterModel;
            if (settings.tiktokRegion && elements.tiktokRegion) elements.tiktokRegion.value = settings.tiktokRegion;
            if (settings.tiktokCount && elements.tiktokCount) elements.tiktokCount.value = settings.tiktokCount;
            
            // Set current platform if saved
            if (settings.currentPlatform) {
                setActivePlatform(settings.currentPlatform);
            }
        }
    } catch (error) {
        console.error('Error loading settings:', error);
    }
};

// Tab Switching
const setActivePlatform = (platform) => {
    // Update tab buttons
    if (elements.tabButtons) {
        elements.tabButtons.forEach(btn => {
            if (btn.dataset.platform === platform) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    // Update platform content
    if (elements.platformContent) {
        elements.platformContent.forEach(content => {
            if (content.id === `${platform}-platform`) {
                content.classList.add('active');
                content.classList.remove('hidden');
            } else {
                content.classList.remove('active');
                content.classList.add('hidden');
            }
        });
    }
    
    // Update state
    state.currentPlatform = platform;
    saveSettings();
};

// Video Card Generation
const createVideoCard = (videoData, platform) => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.dataset.videoId = videoData.id;
    card.dataset.platform = platform;
    
    // Prepare data based on platform
    let title, author, publishedAt, thumbnail, views, likes, comments, videoUrl;
    
    switch(platform) {
        case 'youtube':
            title = videoData.snippet?.title || 'YouTube Video';
            author = videoData.snippet?.channelTitle || 'YouTube Channel';
            publishedAt = videoData.snippet?.publishedAt ? formatDate(videoData.snippet.publishedAt) : 'Недавно';
            thumbnail = videoData.snippet?.thumbnails?.medium?.url || 'https://via.placeholder.com/320x180/00AEEF/FFFFFF?text=YouTube';
            views = formatNumber(videoData.statistics?.viewCount || 0);
            likes = formatNumber(videoData.statistics?.likeCount || 0);
            comments = formatNumber(videoData.statistics?.commentCount || 0);
            videoUrl = `https://www.youtube.com/watch?v=${videoData.id}`;
            break;
            
        case 'tiktok':
            title = videoData.title || 'TikTok Video';
            author = videoData.author || 'TikTok Creator';
            publishedAt = videoData.publishedAt ? formatDate(videoData.publishedAt) : 'Недавно';
            thumbnail = videoData.thumbnail || 'https://via.placeholder.com/320x180/00AEEF/FFFFFF?text=TikTok';
            views = formatNumber(videoData.views || 0);
            likes = formatNumber(videoData.likes || 0);
            comments = formatNumber(videoData.comments || 0);
            videoUrl = videoData.url || '#';
            break;
            
        case 'vk':
            title = videoData.title || 'VK Video';
            author = videoData.author || 'VK User';
            publishedAt = videoData.date ? formatDate(new Date(videoData.date * 1000)) : 'Недавно';
            thumbnail = videoData.image || 'https://via.placeholder.com/320x180/00AEEF/FFFFFF?text=VK';
            views = formatNumber(videoData.views || 0);
            likes = formatNumber(videoData.likes || 0);
            comments = formatNumber(videoData.comments || 0);
            videoUrl = videoData.url || '#';
            break;
    }
    
    // Generate youth appeal score
    const hash = videoData.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const youthAppealScore = Math.floor(60 + (hash % 41)); // 60-100 range
    
    card.innerHTML = `
        <img src="${thumbnail}" alt="${title}" class="video-thumbnail" onerror="this.src='https://via.placeholder.com/320x180/00AEEF/FFFFFF?text=Video'">
        <div class="video-content">
            <a href="${videoUrl}" target="_blank" class="video-title">${title}</a>
            <div class="video-meta">
                ${author} • ${publishedAt}
            </div>
            <div class="video-stats">
                <div class="stat-item">👁️ ${views}</div>
                <div class="stat-item">👍 ${likes}</div>
                <div class="stat-item">💬 ${comments}</div>
            </div>
            <div class="video-rating">
                <div>
                    <small>Для 14-20 лет:</small>
                    <div class="rating-score">${youthAppealScore}%</div>
                </div>
                <div>
                    <small>AI-оценка:</small>
                    <div class="ai-score" data-analyzed="false">??%</div>
                </div>
            </div>
            <div class="video-actions">
                <button class="btn btn--analyze analyze-btn" data-video-id="${videoData.id}">
                    🧠 AI Анализ
                </button>
            </div>
            <div class="ai-analysis hidden" id="analysis-${videoData.id}"></div>
        </div>
    `;
    
    // Add event listener for analysis button
    const analyzeBtn = card.querySelector('.analyze-btn');
    analyzeBtn.addEventListener('click', () => {
        analyzeVideo(videoData, platform);
    });
    
    return card;
};

// Generate Mock YouTube Data
const generateMockYouTubeData = () => {
    const mockVideos = [];
    const videoTitles = [
        "ТОП-10 ТРЕНДОВ 2024 ГОДА! МОЛОДЕЖЬ В ШОКЕ",
        "НОВЫЙ ТИКТОК ЧЕЛЛЕНДЖ СЛОМАЛ ИНТЕРНЕТ",
        "РЕАКЦИЯ НА САМЫЕ ПОПУЛЯРНЫЕ ВИДЕО",
        "КАК Я СТАЛ МИЛЛИОНЕРОМ В 18 ЛЕТ",
        "ПРАНК НАД ДРУЗЬЯМИ ПОШЕЛ НЕ ТАК",
        "ОБЗОР НОВОГО IPHONE - СТОИТ ЛИ ПОКУПАТЬ?",
        "МОЯ УТРЕННЯЯ РУТИНА ДЛЯ УСПЕХА",
        "СЕКРЕТЫ ПОПУЛЯРНОСТИ В СОЦИАЛЬНЫХ СЕТЯХ",
        "ТРЕНДЫ МОДЫ 2024: ЧТО НОСИТЬ ПОДРОСТКАМ",
        "ИГРЫ КОТОРЫЕ ВЗОРВАЛИ ИНТЕРНЕТ В 2024"
    ];
    
    const channels = [
        "Молодежный блог",
        "Trend Setters",
        "Gen Z Content",
        "Viral Videos RU",
        "Youth Culture",
        "Modern Life",
        "Digital Generation",
        "Social Media Pro",
        "Teen Influencer",
        "Future Stars"
    ];
    
    for (let i = 0; i < 20; i++) {
        mockVideos.push({
            id: `youtube-mock-${i + 1}`,
            snippet: {
                title: videoTitles[i % videoTitles.length],
                channelTitle: channels[i % channels.length],
                publishedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
                thumbnails: {
                    medium: {
                        url: `https://via.placeholder.com/320x180/00AEEF/FFFFFF?text=YouTube+${i + 1}`
                    }
                },
                description: `Описание видео ${i + 1}`
            },
            statistics: {
                viewCount: Math.floor(Math.random() * 1000000) + 10000,
                likeCount: Math.floor(Math.random() * 50000) + 1000,
                commentCount: Math.floor(Math.random() * 5000) + 100
            }
        });
    }
    
    return mockVideos;
};

// API Integration
const fetchYoutubeVideos = async () => {
    try {
        const apiKey = elements.youtubeKey?.value;
        
        updateApiStatus('youtube', 'loading');
        if (elements.youtubeApiCheck) {
            elements.youtubeApiCheck.classList.remove('hidden');
        }
        const loadingIndicator = showLoading(elements.youtubeApiCheck || elements.youtubeVideosGrid, 'Загрузка YouTube видео...');
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // For demo purposes, use mock data instead of real API
        const mockData = generateMockYouTubeData();
        
        if (loadingIndicator && loadingIndicator.parentNode) {
            loadingIndicator.remove();
        }
        
        if (elements.youtubeApiCheck) {
            elements.youtubeApiCheck.classList.add('hidden');
        }
        
        updateApiStatus('youtube', 'success');
        state.videos.youtube = mockData;
        
        // Render videos
        renderVideos('youtube', mockData);
        
        // Show mass analysis option
        if (elements.youtubeMassAnalysis) {
            elements.youtubeMassAnalysis.classList.remove('hidden');
        }
        
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        showError(elements.youtubeVideosGrid, `Ошибка при загрузке видео: ${error.message}`);
        updateApiStatus('youtube', 'error');
    }
};

const fetchTiktokVideos = async () => {
    try {
        const clientKey = elements.tiktokClientKey?.value;
        const clientSecret = elements.tiktokClientSecret?.value;
        const useScraping = elements.tiktokScraping?.checked;
        
        if (!clientKey && !clientSecret && !useScraping) {
            showError(elements.tiktokVideosGrid, 'Необходимо указать API ключи TikTok или включить веб-скрейпинг');
            updateApiStatus('tiktok', 'error');
            return;
        }
        
        updateApiStatus('tiktok', 'loading');
        const region = elements.tiktokRegion?.value || 'RU';
        const count = parseInt(elements.tiktokCount?.value) || 20;
        
        const loadingIndicator = showLoading(elements.tiktokVideosGrid, 'Загрузка трендовых видео TikTok...');
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Generate mock data
        const mockData = [];
        for (let i = 1; i <= count; i++) {
            mockData.push({
                id: `tiktok-${i}`,
                title: `Трендовое TikTok видео #${i}`,
                author: `TikTok Creator ${i}`,
                publishedAt: new Date(Date.now() - Math.random() * 604800000).toISOString(),
                thumbnail: `https://via.placeholder.com/320x180/00AEEF/FFFFFF?text=TikTok+${i}`,
                views: Math.floor(Math.random() * 1000000) + 50000,
                likes: Math.floor(Math.random() * 100000) + 5000,
                comments: Math.floor(Math.random() * 10000) + 100,
                url: 'https://www.tiktok.com/'
            });
        }
        
        if (loadingIndicator && loadingIndicator.parentNode) {
            loadingIndicator.remove();
        }
        
        updateApiStatus('tiktok', 'success');
        state.videos.tiktok = mockData;
        
        // Render videos
        renderVideos('tiktok', mockData);
        
        // Show mass analysis option
        if (elements.tiktokMassAnalysis) {
            elements.tiktokMassAnalysis.classList.remove('hidden');
        }
        
    } catch (error) {
        console.error('Error fetching TikTok videos:', error);
        showError(elements.tiktokVideosGrid, `Ошибка при загрузке видео: ${error.message}`);
        updateApiStatus('tiktok', 'error');
    }
};

// VK Video iframe functionality
const loadVkTrendsIframe = () => {
    try {
        // Show iframe container
        if (elements.vkIframeContainer) {
            elements.vkIframeContainer.classList.remove('hidden');
        }
        
        // Set iframe source
        if (elements.vkTrendsIframe) {
            elements.vkTrendsIframe.src = CONFIG.platforms.vk.proxyUrl;
        }
        
        // Reset state
        state.vkIframeLoaded = false;
        if (elements.analyzeVkPageBtn) {
            elements.analyzeVkPageBtn.disabled = true;
        }
        
        // Update status
        if (elements.iframeStatus) {
            elements.iframeStatus.innerHTML = '<div class="loading-indicator">Загрузка страницы трендов...</div>';
        }
        
        // Set up iframe load listener with timeout
        if (elements.vkTrendsIframe) {
            const iframe = elements.vkTrendsIframe;
            
            // Remove any existing listeners
            iframe.removeEventListener('load', handleIframeLoad);
            
            // Add new listener
            iframe.addEventListener('load', handleIframeLoad);
            
            // Set a timeout to enable the button after 3 seconds regardless
            setTimeout(() => {
                if (!state.vkIframeLoaded) {
                    handleIframeLoad();
                }
            }, 3000);
        }
        
    } catch (error) {
        console.error('Error loading VK trends iframe:', error);
        showError(elements.vkVideosGrid, `Ошибка загрузки iframe: ${error.message}`);
    }
};

const handleIframeLoad = () => {
    try {
        state.vkIframeLoaded = true;
        if (elements.analyzeVkPageBtn) {
            elements.analyzeVkPageBtn.disabled = false;
        }
        
        if (elements.iframeStatus) {
            elements.iframeStatus.innerHTML = `
                <div class="status status--success">
                    Страница загружена. Дождитесь полного отображения трендов и пройдите капчу при необходимости.
                </div>
            `;
        }
        
    } catch (error) {
        console.error('Error handling iframe load:', error);
        if (elements.iframeStatus) {
            elements.iframeStatus.innerHTML = `
                <div class="status status--warning">
                    Страница загружена, но возможны ограничения доступа к содержимому.
                </div>
            `;
        }
        
        if (elements.analyzeVkPageBtn) {
            elements.analyzeVkPageBtn.disabled = false;
        }
    }
};

const parseVKTrendsFromIframe = async () => {
    try {
        if (!state.vkIframeLoaded) {
            showError(elements.vkVideosGrid, 'Iframe еще не загружен. Дождитесь завершения загрузки.');
            return;
        }
        
        // Disable button and show loading
        if (elements.analyzeVkPageBtn) {
            elements.analyzeVkPageBtn.disabled = true;
            elements.analyzeVkPageBtn.textContent = 'Анализ страницы...';
        }
        
        const loadingIndicator = showLoading(elements.iframeStatus, 'Анализ содержимого страницы...');
        
        // Simulate parsing delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Use sample VK videos data
        const mockVkVideos = [
            {
                id: 'vk-1',
                title: 'САМЫЙ ПОПУЛЯРНЫЙ ТРЕНД В VK VIDEO 2024',
                author: 'ТОП Блогер',
                views: 1200000,
                likes: 85000,
                comments: 12000,
                date: Math.floor(Date.now() / 1000) - 172800, // 2 days ago
                image: 'https://via.placeholder.com/320x180/00AEEF/FFFFFF?text=VK+Video',
                url: 'https://vkvideo.ru/video-123456'
            },
            {
                id: 'vk-2',
                title: 'Челлендж который взорвал интернет',
                author: 'Молодежный канал',
                views: 800000,
                likes: 65000,
                comments: 8000,
                date: Math.floor(Date.now() / 1000) - 86400, // 1 day ago
                image: 'https://via.placeholder.com/320x180/00AEEF/FFFFFF?text=VK+Trends',
                url: 'https://vkvideo.ru/video-789012'
            },
            {
                id: 'vk-3',
                title: 'Новый мем покорил VK Video',
                author: 'Мемный контент',
                views: 650000,
                likes: 42000,
                comments: 5500,
                date: Math.floor(Date.now() / 1000) - 259200, // 3 days ago
                image: 'https://via.placeholder.com/320x180/00AEEF/FFFFFF?text=VK+Meme',
                url: 'https://vkvideo.ru/video-345678'
            },
            {
                id: 'vk-4',
                title: 'ТОП танец 2024 года',
                author: 'Танцевальный канал',
                views: 920000,
                likes: 78000,
                comments: 9200,
                date: Math.floor(Date.now() / 1000) - 432000, // 5 days ago
                image: 'https://via.placeholder.com/320x180/00AEEF/FFFFFF?text=VK+Dance',
                url: 'https://vkvideo.ru/video-901234'
            },
            {
                id: 'vk-5',
                title: 'Обзор самых популярных игр',
                author: 'Gaming Zone',
                views: 540000,
                likes: 35000,
                comments: 4100,
                date: Math.floor(Date.now() / 1000) - 604800, // 1 week ago
                image: 'https://via.placeholder.com/320x180/00AEEF/FFFFFF?text=VK+Gaming',
                url: 'https://vkvideo.ru/video-567890'
            }
        ];
        
        if (loadingIndicator && loadingIndicator.parentNode) {
            loadingIndicator.remove();
        }
        
        if (mockVkVideos.length === 0) {
            if (elements.iframeStatus) {
                elements.iframeStatus.innerHTML = `
                    <div class="status status--warning">
                        Видео не найдены на загруженной странице. Возможно, страница еще загружается или требуется пройти капчу.
                    </div>
                `;
            }
        } else {
            // Success
            state.videos.vk = mockVkVideos;
            renderVideos('vk', mockVkVideos);
            
            if (elements.iframeStatus) {
                elements.iframeStatus.innerHTML = `
                    <div class="status status--success">
                        Найдено ${mockVkVideos.length} видео. Анализ завершен успешно.
                    </div>
                `;
            }
            
            // Show mass analysis option
            if (elements.vkMassAnalysis) {
                elements.vkMassAnalysis.classList.remove('hidden');
            }
        }
        
        // Re-enable button
        if (elements.analyzeVkPageBtn) {
            elements.analyzeVkPageBtn.disabled = false;
            elements.analyzeVkPageBtn.textContent = 'Проанализировать загруженную страницу';
        }
        
    } catch (error) {
        console.error('Error parsing VK trends:', error);
        showError(elements.vkVideosGrid, `Ошибка при анализе страницы: ${error.message}`);
        
        if (elements.iframeStatus) {
            elements.iframeStatus.innerHTML = `
                <div class="status status--error">
                    Ошибка при анализе страницы. Проверьте, что страница полностью загружена.
                </div>
            `;
        }
        
        // Reset button
        if (elements.analyzeVkPageBtn) {
            elements.analyzeVkPageBtn.disabled = false;
            elements.analyzeVkPageBtn.textContent = 'Проанализировать загруженную страницу';
        }
    }
};

const reloadVkIframe = () => {
    try {
        // Clear existing content
        if (elements.vkVideosGrid) {
            elements.vkVideosGrid.innerHTML = '';
        }
        
        if (elements.vkMassAnalysis) {
            elements.vkMassAnalysis.classList.add('hidden');
        }
        
        state.videos.vk = [];
        
        // Reset iframe
        if (elements.vkTrendsIframe) {
            elements.vkTrendsIframe.src = '';
            setTimeout(() => {
                elements.vkTrendsIframe.src = CONFIG.platforms.vk.proxyUrl;
            }, 100);
        }
        
        // Reset state
        state.vkIframeLoaded = false;
        if (elements.analyzeVkPageBtn) {
            elements.analyzeVkPageBtn.disabled = true;
        }
        
        if (elements.iframeStatus) {
            elements.iframeStatus.innerHTML = '<div class="loading-indicator">Перезагрузка страницы трендов...</div>';
        }
        
    } catch (error) {
        console.error('Error reloading VK iframe:', error);
        showError(elements.vkVideosGrid, `Ошибка при перезагрузке: ${error.message}`);
    }
};

// Render Functions
const renderVideos = (platform, videos) => {
    const gridElement = elements[`${platform}VideosGrid`];
    if (!gridElement) return;
    
    gridElement.innerHTML = '';
    
    if (!videos || videos.length === 0) {
        const placeholderDiv = document.createElement('div');
        placeholderDiv.className = 'placeholder-message';
        placeholderDiv.innerHTML = `
            <h4>Нет доступных видео</h4>
            <p>Для загрузки видео настройте API ключи и нажмите кнопку загрузки</p>
        `;
        gridElement.appendChild(placeholderDiv);
        return;
    }
    
    videos.forEach(video => {
        const card = createVideoCard(video, platform);
        gridElement.appendChild(card);
    });
};

// AI Analysis
const analyzeVideo = async (videoData, platform) => {
    try {
        const openrouterKey = elements.openrouterKey?.value;
        
        if (!openrouterKey) {
            showError(document.querySelector(`#${platform}-videos`), 'Необходим ключ OpenRouter для AI-анализа');
            return;
        }
        
        const videoId = videoData.id;
        const analysisContainer = document.getElementById(`analysis-${videoId}`);
        const aiScoreElement = document.querySelector(`.video-card[data-video-id="${videoId}"] .ai-score`);
        const analyzeBtn = document.querySelector(`.video-card[data-video-id="${videoId}"] .analyze-btn`);
        
        if (!analysisContainer || !aiScoreElement || !analyzeBtn) return;
        
        // Disable button and show loading
        analyzeBtn.disabled = true;
        analyzeBtn.textContent = 'Анализ...';
        
        // Simulate AI analysis
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Generate a pseudo-random but consistent score based on the video ID
        const hash = videoId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const aiScore = Math.floor(55 + (hash % 40)); // Range 55-94
        
        // Generate mock insights
        const insights = [
            'Соответствует актуальным трендам и интересам молодежи',
            'Высокая динамичность и визуальная привлекательность',
            'Присутствуют элементы юмора и мемов, релевантные для целевой аудитории',
            'Аутентичный контент с высоким потенциалом вирусного распространения'
        ];
        
        // Update UI with analysis
        aiScoreElement.textContent = `${aiScore}%`;
        aiScoreElement.dataset.analyzed = 'true';
        
        analysisContainer.innerHTML = `
            <h5>AI Анализ:</h5>
            <ul>
                ${insights.map(insight => `<li>${insight}</li>`).join('')}
            </ul>
        `;
        analysisContainer.classList.remove('hidden');
        
        // Re-enable button
        analyzeBtn.disabled = false;
        analyzeBtn.textContent = '🧠 AI Анализ';
        
    } catch (error) {
        console.error('Error analyzing video:', error);
        const gridElement = elements[`${platform}VideosGrid`];
        showError(gridElement, `Ошибка при анализе видео: ${error.message}`);
        
        // Reset button
        const analyzeBtn = document.querySelector(`.video-card[data-video-id="${videoData.id}"] .analyze-btn`);
        if (analyzeBtn) {
            analyzeBtn.disabled = false;
            analyzeBtn.textContent = '🧠 AI Анализ';
        }
    }
};

// Mass Analysis
const massAnalyzeVideos = async (platform) => {
    try {
        const openrouterKey = elements.openrouterKey?.value;
        
        if (!openrouterKey) {
            showError(document.querySelector(`#${platform}-platform`), 'Необходим ключ OpenRouter для массового анализа');
            return;
        }
        
        const videos = state.videos[platform];
        if (!videos || videos.length === 0) {
            showError(document.querySelector(`#${platform}-platform`), 'Нет видео для анализа');
            return;
        }
        
        const massAnalyzeBtn = elements[`${platform}MassAnalyzeBtn`];
        const progressContainer = document.querySelector(`#${platform}-mass-analysis .mass-progress`);
        const progressFill = document.querySelector(`#${platform}-mass-analysis .progress-fill`);
        const progressText = document.querySelector(`#${platform}-mass-analysis .progress-text`);
        
        if (!massAnalyzeBtn || !progressContainer || !progressFill || !progressText) return;
        
        // Show progress
        progressContainer.classList.remove('hidden');
        massAnalyzeBtn.disabled = true;
        massAnalyzeBtn.textContent = 'Анализ в процессе...';
        
        for (let i = 0; i < videos.length; i++) {
            const video = videos[i];
            const videoId = video.id;
            const aiScoreElement = document.querySelector(`.video-card[data-video-id="${videoId}"] .ai-score`);
            const analysisContainer = document.getElementById(`analysis-${videoId}`);
            
            // Update progress
            progressFill.style.width = `${((i) / videos.length) * 100}%`;
            progressText.textContent = `Анализ ${i} из ${videos.length} видео...`;
            
            // Skip if already analyzed
            if (aiScoreElement && aiScoreElement.dataset.analyzed === 'true') {
                continue;
            }
            
            // Analyze (simplified for demo)
            await new Promise(resolve => setTimeout(resolve, 300));
            
            if (aiScoreElement && analysisContainer) {
                // Generate a pseudo-random but consistent score based on the video ID
                const hash = videoId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                const aiScore = Math.floor(55 + (hash % 40)); // Range 55-94
                
                // Generate mock insights
                const insights = [
                    'Соответствует актуальным трендам молодежи',
                    'Высокая динамичность визуального ряда',
                    'Присутствие популярных мемов и отсылок'
                ];
                
                // Update UI with analysis
                aiScoreElement.textContent = `${aiScore}%`;
                aiScoreElement.dataset.analyzed = 'true';
                
                analysisContainer.innerHTML = `
                    <h5>AI Анализ:</h5>
                    <ul>
                        ${insights.map(insight => `<li>${insight}</li>`).join('')}
                    </ul>
                `;
                analysisContainer.classList.remove('hidden');
            }
        }
        
        // Finalize progress
        progressFill.style.width = '100%';
        progressText.textContent = `Анализ ${videos.length} из ${videos.length} видео завершен`;
        
        // Reset button after 2 seconds
        setTimeout(() => {
            massAnalyzeBtn.disabled = false;
            massAnalyzeBtn.textContent = '🧠 Массовый AI анализ';
        }, 2000);
        
    } catch (error) {
        console.error('Error in mass analysis:', error);
        showError(document.querySelector(`#${platform}-platform`), `Ошибка при массовом анализе: ${error.message}`);
        
        // Reset button
        const massAnalyzeBtn = elements[`${platform}MassAnalyzeBtn`];
        if (massAnalyzeBtn) {
            massAnalyzeBtn.disabled = false;
            massAnalyzeBtn.textContent = '🧠 Массовый AI анализ';
        }
    }
};

// Export to CSV
const exportToCsv = () => {
    try {
        // Get videos from current platform
        const platform = state.currentPlatform;
        const videos = state.videos[platform];
        
        if (!videos || videos.length === 0) {
            showError(document.querySelector(`#${platform}-platform`), 'Нет данных для экспорта');
            return;
        }
        
        // Prepare CSV content
        let csvContent = 'ID,Название,Автор,Дата,Просмотры,Лайки,Комментарии,Оценка для молодежи,AI оценка\n';
        
        videos.forEach(video => {
            let row;
            
            switch(platform) {
                case 'youtube':
                    row = [
                        video.id,
                        `"${(video.snippet?.title || 'Без названия').replace(/"/g, '""')}"`,
                        `"${(video.snippet?.channelTitle || 'Неизвестный канал').replace(/"/g, '""')}"`,
                        video.snippet?.publishedAt || '',
                        video.statistics?.viewCount || 0,
                        video.statistics?.likeCount || 0,
                        video.statistics?.commentCount || 0
                    ];
                    break;
                    
                case 'tiktok':
                    row = [
                        video.id,
                        `"${video.title.replace(/"/g, '""')}"`,
                        `"${video.author.replace(/"/g, '""')}"`,
                        video.publishedAt || '',
                        video.views || 0,
                        video.likes || 0,
                        video.comments || 0
                    ];
                    break;
                    
                case 'vk':
                    row = [
                        video.id,
                        `"${video.title.replace(/"/g, '""')}"`,
                        `"${video.author.replace(/"/g, '""')}"`,
                        video.date ? new Date(video.date * 1000).toISOString() : '',
                        video.views || 0,
                        video.likes || 0,
                        video.comments || 0
                    ];
                    break;
            }
            
            // Calculate youth score (mock for demo)
            const hash = video.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const youthScore = Math.floor(60 + (hash % 41)); // Range 60-100
            row.push(youthScore);
            
            // Get AI score if analyzed
            const aiScoreElement = document.querySelector(`.video-card[data-video-id="${video.id}"] .ai-score`);
            const aiScore = aiScoreElement && aiScoreElement.dataset.analyzed === 'true' 
                ? aiScoreElement.textContent.replace('%', '')
                : 'N/A';
            row.push(aiScore);
            
            csvContent += row.join(',') + '\n';
        });
        
        // Create download link
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `${platform}_videos_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        URL.revokeObjectURL(url);
        
    } catch (error) {
        console.error('Error exporting to CSV:', error);
        showError(document.querySelector('.export-section'), `Ошибка при экспорте: ${error.message}`);
    }
};

// Compare Platforms
const comparePlatforms = () => {
    alert('Функция сравнения платформ будет доступна в следующем обновлении.');
};

// Initialize DOM Elements
const initElements = () => {
    elements = {
        tabButtons: document.querySelectorAll('.tab-btn'),
        platformContent: document.querySelectorAll('.platform-content'),
        
        // API Configuration
        youtubeKey: document.getElementById('youtube-key'),
        youtubeStatus: document.getElementById('youtube-status'),
        
        tiktokClientKey: document.getElementById('tiktok-client-key'),
        tiktokClientSecret: document.getElementById('tiktok-client-secret'),
        tiktokScraping: document.getElementById('tiktok-scraping'),
        tiktokStatus: document.getElementById('tiktok-status'),
        
        openrouterKey: document.getElementById('openrouter-key'),
        openrouterModel: document.getElementById('openrouter-model'),
        
        // Platform-specific elements
        loadYoutubeBtn: document.getElementById('load-youtube-data'),
        youtubeApiCheck: document.getElementById('youtube-api-check'),
        youtubeVideosGrid: document.getElementById('youtube-videos'),
        youtubeMassAnalysis: document.getElementById('youtube-mass-analysis'),
        youtubeMassAnalyzeBtn: document.getElementById('youtube-mass-analyze'),
        
        loadTiktokBtn: document.getElementById('load-tiktok-data'),
        tiktokRegion: document.getElementById('tiktok-region'),
        tiktokCount: document.getElementById('tiktok-count'),
        tiktokVideosGrid: document.getElementById('tiktok-videos'),
        tiktokMassAnalysis: document.getElementById('tiktok-mass-analysis'),
        tiktokMassAnalyzeBtn: document.getElementById('tiktok-mass-analyze'),
        
        // VK Video iframe elements
        loadVkTrendsBtn: document.getElementById('load-vk-trends'),
        vkIframeContainer: document.getElementById('vk-iframe-container'),
        vkTrendsIframe: document.getElementById('vk-trends-iframe'),
        analyzeVkPageBtn: document.getElementById('analyze-vk-page'),
        reloadVkIframeBtn: document.getElementById('reload-vk-iframe'),
        iframeStatus: document.getElementById('iframe-status'),
        vkVideosGrid: document.getElementById('vk-videos'),
        vkMassAnalysis: document.getElementById('vk-mass-analysis'),
        vkMassAnalyzeBtn: document.getElementById('vk-mass-analyze'),
        
        // Export buttons
        exportCsvBtn: document.getElementById('export-csv'),
        comparePlatformsBtn: document.getElementById('compare-platforms')
    };
};

// Event Listeners
const initEventListeners = () => {
    // Tab switching
    if (elements.tabButtons) {
        elements.tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const platform = btn.dataset.platform;
                setActivePlatform(platform);
            });
        });
    }
    
    // Save settings on change
    document.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('change', saveSettings);
    });
    
    // Load data buttons
    if (elements.loadYoutubeBtn) {
        elements.loadYoutubeBtn.addEventListener('click', fetchYoutubeVideos);
    }
    
    if (elements.loadTiktokBtn) {
        elements.loadTiktokBtn.addEventListener('click', fetchTiktokVideos);
    }
    
    // VK Video iframe buttons
    if (elements.loadVkTrendsBtn) {
        elements.loadVkTrendsBtn.addEventListener('click', loadVkTrendsIframe);
    }
    
    if (elements.analyzeVkPageBtn) {
        elements.analyzeVkPageBtn.addEventListener('click', parseVKTrendsFromIframe);
    }
    
    if (elements.reloadVkIframeBtn) {
        elements.reloadVkIframeBtn.addEventListener('click', reloadVkIframe);
    }
    
    // Mass analyze buttons
    if (elements.youtubeMassAnalyzeBtn) {
        elements.youtubeMassAnalyzeBtn.addEventListener('click', () => massAnalyzeVideos('youtube'));
    }
    
    if (elements.tiktokMassAnalyzeBtn) {
        elements.tiktokMassAnalyzeBtn.addEventListener('click', () => massAnalyzeVideos('tiktok'));
    }
    
    if (elements.vkMassAnalyzeBtn) {
        elements.vkMassAnalyzeBtn.addEventListener('click', () => massAnalyzeVideos('vk'));
    }
    
    // Export buttons
    if (elements.exportCsvBtn) {
        elements.exportCsvBtn.addEventListener('click', exportToCsv);
    }
    
    if (elements.comparePlatformsBtn) {
        elements.comparePlatformsBtn.addEventListener('click', comparePlatforms);
    }
};

// Initialize App
const init = () => {
    initElements();
    initEventListeners();
    loadSettings();
};

// Start the app
document.addEventListener('DOMContentLoaded', init);
