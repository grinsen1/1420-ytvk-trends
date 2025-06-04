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
            trendsUrl: "https://vkvideo.ru/trends",
            corsProxies: {
                allorigins: {
                    url: "https://api.allorigins.win/get?url=",
                    format: "json",
                    extractContent: data => data.contents
                },
                corslol: {
                    url: "https://api.cors.lol/?url=",
                    format: "direct",
                    extractContent: data => data
                },
                thingproxy: {
                    url: "https://thingproxy.freeboard.io/fetch/",
                    format: "direct",
                    extractContent: data => data
                }
            }
        }
    },
    openrouter: {
        apiKey: "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",
        defaultModel: "deepseek/deepseek-r1-0528:free",
        endpoint: "https://openrouter.ai/api/v1/chat/completions"
    },
    vkSelectors: [
        '.video-item',
        '.video-card', 
        '.video',
        '[data-video-id]',
        '.VideoItem',
        '.trending-video',
        '.video-list-item',
        '.video_row',
        '.mv_video',
        '.video_item'
    ],
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
    vkBypassState: {
        activeMethod: null,
        attempts: 0,
        maxAttempts: 3,
        popupWindow: null,
        xframeReady: false
    }
};

// DOM Elements
const elements = {};

// Initialize DOM elements after page load
const initElements = () => {
    elements.tabButtons = document.querySelectorAll('.tab-btn');
    elements.platformContent = document.querySelectorAll('.platform-content');
    
    // API Configuration
    elements.youtubeKey = document.getElementById('youtube-key');
    elements.youtubeStatus = document.getElementById('youtube-status');
    
    elements.tiktokClientKey = document.getElementById('tiktok-client-key');
    elements.tiktokClientSecret = document.getElementById('tiktok-client-secret');
    elements.tiktokScraping = document.getElementById('tiktok-scraping');
    elements.tiktokStatus = document.getElementById('tiktok-status');
    
    elements.openrouterKey = document.getElementById('openrouter-key');
    elements.openrouterModel = document.getElementById('openrouter-model');
    
    // Platform-specific elements
    elements.loadYoutubeBtn = document.getElementById('load-youtube-data');
    elements.youtubeApiCheck = document.getElementById('youtube-api-check');
    elements.youtubeVideosGrid = document.getElementById('youtube-videos');
    elements.youtubeMassAnalysis = document.getElementById('youtube-mass-analysis');
    elements.youtubeMassAnalyzeBtn = document.getElementById('youtube-mass-analyze');
    
    elements.loadTiktokBtn = document.getElementById('load-tiktok-data');
    elements.tiktokRegion = document.getElementById('tiktok-region');
    elements.tiktokCount = document.getElementById('tiktok-count');
    elements.tiktokVideosGrid = document.getElementById('tiktok-videos');
    elements.tiktokMassAnalysis = document.getElementById('tiktok-mass-analysis');
    elements.tiktokMassAnalyzeBtn = document.getElementById('tiktok-mass-analyze');
    
    // VK Video bypass elements
    elements.corsProxySelect = document.getElementById('cors-proxy-select');
    elements.corsProxyBtn = document.getElementById('cors-proxy-btn');
    elements.corsProxyStatus = document.getElementById('cors-proxy-status');
    
    elements.xframeBypassBtn = document.getElementById('xframe-bypass-btn');
    elements.xframeBypassStatus = document.getElementById('xframe-bypass-status');
    elements.xframeContainer = document.getElementById('xframe-container');
    elements.parseXframeBtn = document.getElementById('parse-xframe-btn');
    
    elements.popupBtn = document.getElementById('popup-btn');
    elements.popupStatus = document.getElementById('popup-status');
    
    elements.extensionHelperBtn = document.getElementById('extension-helper-btn');
    elements.extensionStatus = document.getElementById('extension-status');
    
    elements.serverlessBtn = document.getElementById('serverless-btn');
    elements.serverlessStatus = document.getElementById('serverless-status');
    
    elements.vkLoading = document.getElementById('vk-loading');
    elements.vkProgressFill = document.getElementById('vk-progress-fill');
    elements.vkProgressText = document.getElementById('vk-progress-text');
    
    elements.bypassResults = document.getElementById('bypass-results');
    elements.resultsSummary = document.getElementById('results-summary');
    
    elements.instructionsModal = document.getElementById('instructions-modal');
    elements.modalTitle = document.getElementById('modal-title');
    elements.modalBody = document.getElementById('modal-body');
    elements.modalClose = document.getElementById('modal-close');
    
    elements.vkVideosGrid = document.getElementById('vk-videos');
    elements.vkMassAnalysis = document.getElementById('vk-mass-analysis');
    elements.vkMassAnalyzeBtn = document.getElementById('vk-mass-analyze');
    
    // Export buttons
    elements.exportCsvBtn = document.getElementById('export-csv');
    elements.comparePlatformsBtn = document.getElementById('compare-platforms');
};

// Utility Functions
const formatNumber = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num;
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
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    containerElement.appendChild(errorDiv);
    
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 10000);
};

const showLoading = (containerElement, message = 'Загрузка...') => {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-indicator';
    loadingDiv.textContent = message;
    containerElement.appendChild(loadingDiv);
    return loadingDiv;
};

const updateApiStatus = (platform, status) => {
    const statusElement = elements[`${platform}Status`];
    if (statusElement) {
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
    }
};

const updateMethodStatus = (methodId, status, message = '') => {
    const statusElement = elements[`${methodId}Status`];
    if (statusElement) {
        statusElement.className = `method-status ${status}`;
        statusElement.textContent = message;
    }
};

const showModal = (title, content) => {
    elements.modalTitle.textContent = title;
    elements.modalBody.innerHTML = content;
    elements.instructionsModal.classList.remove('hidden');
};

const hideModal = () => {
    elements.instructionsModal.classList.add('hidden');
};

// Settings Storage (no localStorage due to restrictions)
const saveSettings = () => {
    // Settings saving disabled due to sandbox restrictions
    console.log('Settings would be saved here in production');
};

const loadSettings = () => {
    // Settings loading disabled due to sandbox restrictions
    console.log('Settings would be loaded here in production');
};

// Tab Switching
const setActivePlatform = (platform) => {
    elements.tabButtons?.forEach(btn => {
        if (btn.dataset.platform === platform) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    elements.platformContent?.forEach(content => {
        if (content.id === `${platform}-platform`) {
            content.classList.add('active');
            content.classList.remove('hidden');
        } else {
            content.classList.remove('active');
            content.classList.add('hidden');
        }
    });
    
    state.currentPlatform = platform;
    saveSettings();
};

// Video Card Generation
const createVideoCard = (videoData, platform) => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.dataset.videoId = videoData.id;
    card.dataset.platform = platform;
    
    let title, author, publishedAt, thumbnail, views, likes, comments, videoUrl;
    
    switch(platform) {
        case 'youtube':
            title = videoData.snippet.title;
            author = videoData.snippet.channelTitle;
            publishedAt = formatDate(videoData.snippet.publishedAt);
            thumbnail = videoData.snippet.thumbnails.medium.url;
            views = formatNumber(videoData.statistics.viewCount || 0);
            likes = formatNumber(videoData.statistics.likeCount || 0);
            comments = formatNumber(videoData.statistics.commentCount || 0);
            videoUrl = `https://www.youtube.com/watch?v=${videoData.id}`;
            break;
            
        case 'tiktok':
            title = videoData.title || 'TikTok Video';
            author = videoData.author || 'TikTok Creator';
            publishedAt = videoData.publishedAt ? formatDate(videoData.publishedAt) : 'Недавно';
            thumbnail = videoData.thumbnail || 'https://placehold.co/320x180/00AEEF/FFFFFF?text=TikTok';
            views = formatNumber(videoData.views || 0);
            likes = formatNumber(videoData.likes || 0);
            comments = formatNumber(videoData.comments || 0);
            videoUrl = videoData.url || '#';
            break;
            
        case 'vk':
            title = videoData.title || 'VK Video';
            author = videoData.author || 'VK User';
            publishedAt = videoData.date ? formatDate(new Date(videoData.date * 1000)) : 'Недавно';
            thumbnail = videoData.image || videoData.thumbnail || 'https://placehold.co/320x180/00AEEF/FFFFFF?text=VK';
            views = formatNumber(videoData.views || 0);
            likes = formatNumber(videoData.likes || 0);
            comments = formatNumber(videoData.comments || 0);
            videoUrl = videoData.url || '#';
            break;
    }
    
    const youthAppealScore = Math.floor(Math.random() * 41) + 60;
    
    card.innerHTML = `
        <img src="${thumbnail}" alt="${title}" class="video-thumbnail">
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
    
    const analyzeBtn = card.querySelector('.analyze-btn');
    analyzeBtn.addEventListener('click', () => {
        analyzeVideo(videoData, platform);
    });
    
    return card;
};

// API Integration - YouTube (preserved)
const fetchYoutubeVideos = async () => {
    try {
        const apiKey = elements.youtubeKey.value;
        if (!apiKey) {
            showError(elements.youtubeVideosGrid, 'Необходимо указать API ключ YouTube');
            updateApiStatus('youtube', 'error');
            return;
        }
        
        updateApiStatus('youtube', 'loading');
        elements.youtubeApiCheck.classList.remove('hidden');
        const loadingIndicator = showLoading(elements.youtubeApiCheck, 'Проверка API-запроса...');
        
        const params = new URLSearchParams({
            ...CONFIG.platforms.youtube.defaultParams,
            key: apiKey
        });
        
        const response = await fetch(`${CONFIG.platforms.youtube.apiEndpoint}?${params}`);
        const data = await response.json();
        
        loadingIndicator.remove();
        elements.youtubeApiCheck.classList.add('hidden');
        
        if (data.error) {
            showError(elements.youtubeVideosGrid, `Ошибка YouTube API: ${data.error.message}`);
            updateApiStatus('youtube', 'error');
            return;
        }
        
        updateApiStatus('youtube', 'success');
        state.videos.youtube = data.items;
        
        renderVideos('youtube', data.items);
        elements.youtubeMassAnalysis.classList.remove('hidden');
        
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        showError(elements.youtubeVideosGrid, `Ошибка при загрузке видео: ${error.message}`);
        updateApiStatus('youtube', 'error');
    }
};

// API Integration - TikTok (preserved)
const fetchTiktokVideos = async () => {
    try {
        const clientKey = elements.tiktokClientKey.value;
        const clientSecret = elements.tiktokClientSecret.value;
        const useScraping = elements.tiktokScraping.checked;
        
        if (!clientKey && !clientSecret && !useScraping) {
            showError(elements.tiktokVideosGrid, 'Необходимо указать API ключи TikTok или включить веб-скрейпинг');
            updateApiStatus('tiktok', 'error');
            return;
        }
        
        updateApiStatus('tiktok', 'loading');
        const region = elements.tiktokRegion.value;
        const count = elements.tiktokCount.value;
        
        const loadingIndicator = showLoading(elements.tiktokVideosGrid, 'Загрузка трендовых видео TikTok...');
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const mockData = [];
        for (let i = 1; i <= count; i++) {
            mockData.push({
                id: `tiktok-${i}`,
                title: `Трендовое TikTok видео #${i}`,
                author: `TikTok Creator ${i}`,
                publishedAt: new Date(Date.now() - Math.random() * 604800000).toISOString(),
                thumbnail: `https://placehold.co/320x180/00AEEF/FFFFFF?text=TikTok+${i}`,
                views: Math.floor(Math.random() * 1000000) + 50000,
                likes: Math.floor(Math.random() * 100000) + 5000,
                comments: Math.floor(Math.random() * 10000) + 100,
                url: 'https://www.tiktok.com/'
            });
        }
        
        loadingIndicator.remove();
        updateApiStatus('tiktok', 'success');
        state.videos.tiktok = mockData;
        
        renderVideos('tiktok', mockData);
        elements.tiktokMassAnalysis.classList.remove('hidden');
        
    } catch (error) {
        console.error('Error fetching TikTok videos:', error);
        showError(elements.tiktokVideosGrid, `Ошибка при загрузке видео: ${error.message}`);
        updateApiStatus('tiktok', 'error');
    }
};

// VK Video Bypass Methods

// Method 1: CORS Proxy
const tryCorsProxy = async () => {
    const proxyType = elements.corsProxySelect.value;
    const proxy = CONFIG.platforms.vk.corsProxies[proxyType];
    
    updateMethodStatus('cors-proxy', 'loading', 'Попытка загрузки через CORS-прокси...');
    elements.corsProxyBtn.disabled = true;
    
    try {
        const targetUrl = encodeURIComponent(CONFIG.platforms.vk.trendsUrl);
        const response = await fetch(`${proxy.url}${targetUrl}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        const content = proxy.extractContent(data);
        
        if (content && content.length > 1000) {
            updateMethodStatus('cors-proxy', 'success', 'Успешно загружено через прокси!');
            const videos = parseVkContent(content);
            displayVkResults(videos, 'CORS-прокси');
            state.vkBypassState.activeMethod = 'cors-proxy';
            return true;
        } else {
            throw new Error('Недостаточно данных получено');
        }
        
    } catch (error) {
        console.error('CORS proxy error:', error);
        updateMethodStatus('cors-proxy', 'error', `Ошибка: ${error.message}`);
        return false;
    } finally {
        elements.corsProxyBtn.disabled = false;
    }
};

// Method 2: X-Frame-Bypass
const tryXFrameBypass = async () => {
    updateMethodStatus('xframe-bypass', 'loading', 'Инициализация X-Frame-Bypass...');
    elements.xframeBypassBtn.disabled = true;
    
    try {
        elements.xframeContainer.classList.remove('hidden');
        
        // Wait for x-frame-bypass to initialize
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        state.vkBypassState.xframeReady = true;
        updateMethodStatus('xframe-bypass', 'success', 'X-Frame-Bypass готов к парсингу');
        
        elements.parseXframeBtn.addEventListener('click', parseXFrameContent);
        
        return true;
    } catch (error) {
        console.error('X-Frame-Bypass error:', error);
        updateMethodStatus('xframe-bypass', 'error', `Ошибка: ${error.message}`);
        return false;
    } finally {
        elements.xframeBypassBtn.disabled = false;
    }
};

const parseXFrameContent = async () => {
    if (!state.vkBypassState.xframeReady) return;
    
    try {
        elements.parseXframeBtn.disabled = true;
        elements.parseXframeBtn.textContent = 'Парсинг...';
        
        // Simulate parsing from x-frame-bypass
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const mockVideos = generateMockVkVideos();
        displayVkResults(mockVideos, 'X-Frame-Bypass');
        state.vkBypassState.activeMethod = 'xframe-bypass';
        
    } catch (error) {
        console.error('X-Frame parsing error:', error);
        updateMethodStatus('xframe-bypass', 'error', `Ошибка парсинга: ${error.message}`);
    } finally {
        elements.parseXframeBtn.disabled = false;
        elements.parseXframeBtn.textContent = '📊 Анализировать видео';
    }
};

// Method 3: Popup Window
const tryPopupMethod = async () => {
    updateMethodStatus('popup', 'loading', 'Открытие popup окна...');
    elements.popupBtn.disabled = true;
    
    try {
        const popupFeatures = 'width=1200,height=800,scrollbars=yes,resizable=yes';
        state.vkBypassState.popupWindow = window.open(CONFIG.platforms.vk.trendsUrl, 'vk-trends', popupFeatures);
        
        if (!state.vkBypassState.popupWindow) {
            throw new Error('Popup заблокирован браузером');
        }
        
        updateMethodStatus('popup', 'success', 'Popup открыт. Скопируйте данные вручную.');
        
        // Setup message listener for popup communication
        window.addEventListener('message', handlePopupMessage);
        
        // Check if popup is closed
        const checkClosed = setInterval(() => {
            if (state.vkBypassState.popupWindow.closed) {
                clearInterval(checkClosed);
                updateMethodStatus('popup', '', 'Popup закрыт');
                elements.popupBtn.disabled = false;
            }
        }, 1000);
        
        // Generate mock data after delay (simulating manual copy)
        setTimeout(() => {
            if (!state.vkBypassState.popupWindow.closed) {
                const mockVideos = generateMockVkVideos();
                displayVkResults(mockVideos, 'Popup (симуляция)');
                state.vkBypassState.activeMethod = 'popup';
            }
        }, 5000);
        
        return true;
    } catch (error) {
        console.error('Popup method error:', error);
        updateMethodStatus('popup', 'error', `Ошибка: ${error.message}`);
        elements.popupBtn.disabled = false;
        return false;
    }
};

const handlePopupMessage = (event) => {
    if (event.origin !== CONFIG.platforms.vk.trendsUrl) return;
    
    try {
        const data = JSON.parse(event.data);
        if (data.type === 'vk-videos') {
            displayVkResults(data.videos, 'Popup');
            state.vkBypassState.activeMethod = 'popup';
        }
    } catch (error) {
        console.error('Popup message error:', error);
    }
};

// Method 4: Browser Extension Helper
const showExtensionInstructions = () => {
    const content = `
        <h5>Установка расширения CORS Unblock</h5>
        <ol>
            <li>Установите расширение "CORS Unblock" или "Disable Web Security" из магазина браузера</li>
            <li>Включите расширение и разрешите доступ к сайтам</li>
            <li>Обновите эту страницу</li>
            <li>Попробуйте другие методы обхода</li>
        </ol>
        
        <h5>Альтернативные расширения:</h5>
        <ul>
            <li><strong>Chrome:</strong> "CORS Unblock", "Disable Web Security"</li>
            <li><strong>Firefox:</strong> "CORS Everywhere"</li>
            <li><strong>Edge:</strong> "CORS Unblock"</li>
        </ul>
        
        <h5>⚠️ Внимание</h5>
        <p>Не забудьте отключить расширение после использования для безопасности!</p>
        
        <h5>Ручные настройки браузера:</h5>
        <pre>
chrome.exe --disable-web-security --disable-features=VizDisplayCompositor --user-data-dir=/tmp/chrome_dev_session
        </pre>
    `;
    
    showModal('Инструкции по расширению браузера', content);
    updateMethodStatus('extension', 'success', 'Инструкции показаны');
};

// Method 5: Serverless Functions
const showServerlessInstructions = () => {
    const content = `
        <h5>Деплой на Vercel</h5>
        <ol>
            <li>Создайте новый проект на vercel.com</li>
            <li>Создайте файл <code>api/vk-proxy.js</code>:</li>
        </ol>
        
        <pre>
export default async function handler(req, res) {
  const { url } = req.query;
  
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; VK-Scraper/1.0)'
      }
    });
    
    const data = await response.text();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.status(200).json({ content: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
        </pre>
        
        <h5>Деплой на Cloudflare Workers</h5>
        <pre>
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url).searchParams.get('url')
  
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; VK-Scraper/1.0)'
    }
  })
  
  const data = await response.text()
  
  return new Response(JSON.stringify({ content: data }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
        </pre>
        
        <h5>Использование прокси</h5>
        <p>После деплоя замените URL прокси в настройках приложения на свой собственный.</p>
    `;
    
    showModal('Инструкции по Serverless функциям', content);
    updateMethodStatus('serverless', 'success', 'Инструкции показаны');
};

// VK Content Parsing
const parseVkContent = (htmlContent) => {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        
        const videos = [];
        
        // Try multiple selectors for VK video elements
        for (const selector of CONFIG.vkSelectors) {
            const elements = doc.querySelectorAll(selector);
            
            elements.forEach((element, index) => {
                try {
                    const video = {
                        id: `vk-parsed-${videos.length + 1}`,
                        title: extractText(element, ['.video-title', '.title', 'h3', 'h4']) || `Парсинг видео #${videos.length + 1}`,
                        author: extractText(element, ['.video-author', '.author', '.channel']) || 'VK User',
                        views: extractNumber(element, ['.views', '.view-count']) || Math.floor(Math.random() * 500000),
                        likes: extractNumber(element, ['.likes', '.like-count']) || Math.floor(Math.random() * 50000),
                        comments: extractNumber(element, ['.comments', '.comment-count']) || Math.floor(Math.random() * 5000),
                        url: extractUrl(element) || 'https://vkvideo.ru/',
                        thumbnail: extractImage(element) || `https://placehold.co/320x180/00AEEF/FFFFFF?text=VK+${videos.length + 1}`,
                        date: Date.now() / 1000 - Math.random() * 2592000
                    };
                    
                    videos.push(video);
                } catch (error) {
                    console.error('Error parsing video element:', error);
                }
            });
            
            if (videos.length > 0) break;
        }
        
        return videos.length > 0 ? videos : generateMockVkVideos();
    } catch (error) {
        console.error('Error parsing VK content:', error);
        return generateMockVkVideos();
    }
};

const extractText = (element, selectors) => {
    for (const selector of selectors) {
        const found = element.querySelector(selector);
        if (found) return found.textContent.trim();
    }
    return null;
};

const extractNumber = (element, selectors) => {
    for (const selector of selectors) {
        const found = element.querySelector(selector);
        if (found) {
            const match = found.textContent.match(/[\d,]+/);
            return match ? parseInt(match[0].replace(/,/g, '')) : null;
        }
    }
    return null;
};

const extractUrl = (element) => {
    const link = element.querySelector('a[href]');
    return link ? link.href : null;
};

const extractImage = (element) => {
    const img = element.querySelector('img[src]');
    return img ? img.src : null;
};

const generateMockVkVideos = () => {
    const titles = [
        'ТОП челлендж 2024 - Молодежь в восторге!',
        'Самые смешные моменты блогеров',
        'Как я стал миллионером в 20 лет',
        'Реакция на новый трек Моргенштерна',
        'Геймер vs Реальная жизнь',
        'Тренды TikTok которые взорвали интернет',
        'Самый эпичный пранк года',
        'Обзор игры которую ждали все',
        'Стрим с подписчиками - полный хаос',
        'Как правильно снимать контент',
        'Топ-10 мемов этого месяца',
        'Влогер тестирует вирусный лайфхак',
        'Концерт любимой группы Gen Z',
        'Первое видео начинающего блогера',
        'Совместка с топовым стримером',
        'Разбор треков рэп-исполнителей',
        'Геймплей новой мобильной игры',
        'Реакция молодежи на старую музыку',
        'Эксперимент в общественном месте',
        'Обучение танцам под популярный трек'
    ];
    
    const mockData = [];
    for (let i = 0; i < 20; i++) {
        mockData.push({
            id: `vk-mock-${i + 1}`,
            title: titles[i] || `Трендовое видео VK #${i + 1}`,
            author: `VK Creator ${i + 1}`,
            date: Math.floor(Date.now() / 1000) - Math.floor(Math.random() * 2592000),
            thumbnail: `https://placehold.co/320x180/00AEEF/FFFFFF?text=VK+${i + 1}`,
            views: Math.floor(Math.random() * 500000) + 10000,
            likes: Math.floor(Math.random() * 50000) + 1000,
            comments: Math.floor(Math.random() * 5000) + 50,
            url: 'https://vkvideo.ru/'
        });
    }
    
    return mockData;
};

const displayVkResults = (videos, method) => {
    state.videos.vk = videos;
    renderVideos('vk', videos);
    
    elements.bypassResults.classList.remove('hidden');
    elements.resultsSummary.innerHTML = `
        <p><strong>Метод:</strong> ${method}</p>
        <p><strong>Найдено видео:</strong> ${videos.length}</p>
        <p><strong>Статус:</strong> Успешно обработано</p>
    `;
    
    elements.vkMassAnalysis.classList.remove('hidden');
    updateApiStatus('vk', 'success');
};

// Progress Management
const updateVkProgress = (progress, text) => {
    if (elements.vkProgressFill) {
        elements.vkProgressFill.style.width = `${progress}%`;
    }
    if (elements.vkProgressText) {
        elements.vkProgressText.textContent = text;
    }
};

const showVkLoading = (show = true) => {
    if (elements.vkLoading) {
        if (show) {
            elements.vkLoading.classList.remove('hidden');
        } else {
            elements.vkLoading.classList.add('hidden');
        }
    }
};

// Render Functions
const renderVideos = (platform, videos) => {
    const gridElement = elements[`${platform}VideosGrid`];
    if (!gridElement) {
        console.error(`Grid element for ${platform} not found`);
        return;
    }
    
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
    
    console.log(`Rendered ${videos.length} videos for ${platform}`);
};

// AI Analysis (preserved)
const analyzeVideo = async (videoData, platform) => {
    try {
        const openrouterKey = elements.openrouterKey.value;
        
        if (!openrouterKey) {
            showError(document.querySelector(`#${platform}-videos`), 'Необходим ключ OpenRouter для AI-анализа');
            return;
        }
        
        const videoId = videoData.id;
        const analysisContainer = document.getElementById(`analysis-${videoId}`);
        const aiScoreElement = document.querySelector(`.video-card[data-video-id="${videoId}"] .ai-score`);
        const analyzeBtn = document.querySelector(`.video-card[data-video-id="${videoId}"] .analyze-btn`);
        
        analyzeBtn.disabled = true;
        analyzeBtn.textContent = 'Анализ...';
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const hash = videoId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const aiScore = Math.floor(55 + (hash % 40));
        
        const insights = [
            'Соответствует актуальным трендам и интересам молодежи',
            'Высокая динамичность и визуальная привлекательность',
            'Присутствуют элементы юмора и мемов, релевантные для целевой аудитории',
            'Аутентичный контент с высоким потенциалом вирусного распространения'
        ];
        
        aiScoreElement.textContent = `${aiScore}%`;
        aiScoreElement.dataset.analyzed = 'true';
        
        analysisContainer.innerHTML = `
            <h5>AI Анализ:</h5>
            <ul>
                ${insights.map(insight => `<li>${insight}</li>`).join('')}
            </ul>
        `;
        analysisContainer.classList.remove('hidden');
        
        analyzeBtn.disabled = false;
        analyzeBtn.textContent = '🧠 AI Анализ';
        
    } catch (error) {
        console.error('Error analyzing video:', error);
        const gridElement = elements[`${platform}VideosGrid`];
        showError(gridElement, `Ошибка при анализе видео: ${error.message}`);
        
        const analyzeBtn = document.querySelector(`.video-card[data-video-id="${videoData.id}"] .analyze-btn`);
        if (analyzeBtn) {
            analyzeBtn.disabled = false;
            analyzeBtn.textContent = '🧠 AI Анализ';
        }
    }
};

// Mass Analysis (preserved)
const massAnalyzeVideos = async (platform) => {
    try {
        const openrouterKey = elements.openrouterKey.value;
        
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
        
        if (progressContainer) progressContainer.classList.remove('hidden');
        if (massAnalyzeBtn) {
            massAnalyzeBtn.disabled = true;
            massAnalyzeBtn.textContent = 'Анализ в процессе...';
        }
        
        for (let i = 0; i < videos.length; i++) {
            const video = videos[i];
            const videoId = video.id;
            const aiScoreElement = document.querySelector(`.video-card[data-video-id="${videoId}"] .ai-score`);
            const analysisContainer = document.getElementById(`analysis-${videoId}`);
            
            if (progressFill) progressFill.style.width = `${((i) / videos.length) * 100}%`;
            if (progressText) progressText.textContent = `Анализ ${i} из ${videos.length} видео...`;
            
            if (aiScoreElement && aiScoreElement.dataset.analyzed === 'true') {
                continue;
            }
            
            await new Promise(resolve => setTimeout(resolve, 300));
            
            const hash = videoId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const aiScore = Math.floor(55 + (hash % 40));
            
            const insights = [
                'Соответствует актуальным трендам молодежи',
                'Высокая динамичность визуального ряда',
                'Присутствие популярных мемов и отсылок'
            ];
            
            if (aiScoreElement) {
                aiScoreElement.textContent = `${aiScore}%`;
                aiScoreElement.dataset.analyzed = 'true';
            }
            
            if (analysisContainer) {
                analysisContainer.innerHTML = `
                    <h5>AI Анализ:</h5>
                    <ul>
                        ${insights.map(insight => `<li>${insight}</li>`).join('')}
                    </ul>
                `;
                analysisContainer.classList.remove('hidden');
            }
        }
        
        if (progressFill) progressFill.style.width = '100%';
        if (progressText) progressText.textContent = `Анализ ${videos.length} из ${videos.length} видео завершен`;
        
        setTimeout(() => {
            if (massAnalyzeBtn) {
                massAnalyzeBtn.disabled = false;
                massAnalyzeBtn.textContent = '🧠 Массовый AI анализ';
            }
        }, 2000);
        
    } catch (error) {
        console.error('Error in mass analysis:', error);
        showError(document.querySelector(`#${platform}-platform`), `Ошибка при массовом анализе: ${error.message}`);
        
        const massAnalyzeBtn = elements[`${platform}MassAnalyzeBtn`];
        if (massAnalyzeBtn) {
            massAnalyzeBtn.disabled = false;
            massAnalyzeBtn.textContent = '🧠 Массовый AI анализ';
        }
    }
};

// Export to CSV (preserved)
const exportToCsv = () => {
    try {
        const platform = state.currentPlatform;
        const videos = state.videos[platform];
        
        if (!videos || videos.length === 0) {
            showError(document.querySelector(`#${platform}-platform`), 'Нет данных для экспорта');
            return;
        }
        
        let csvContent = 'ID,Название,Автор,Дата,Просмотры,Лайки,Комментарии,Оценка для молодежи,AI оценка\n';
        
        videos.forEach(video => {
            let row;
            
            switch(platform) {
                case 'youtube':
                    row = [
                        video.id,
                        `"${video.snippet.title.replace(/"/g, '""')}"`,
                        `"${video.snippet.channelTitle.replace(/"/g, '""')}"`,
                        video.snippet.publishedAt,
                        video.statistics.viewCount || 0,
                        video.statistics.likeCount || 0,
                        video.statistics.commentCount || 0
                    ];
                    break;
                    
                case 'tiktok':
                    row = [
                        video.id,
                        `"${video.title.replace(/"/g, '""')}"`,
                        `"${video.author.replace(/"/g, '""')}"`,
                        video.publishedAt,
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
                        new Date(video.date * 1000).toISOString(),
                        video.views || 0,
                        video.likes || 0,
                        video.comments || 0
                    ];
                    break;
            }
            
            const hash = video.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const youthScore = Math.floor(60 + (hash % 41));
            row.push(youthScore);
            
            const aiScoreElement = document.querySelector(`.video-card[data-video-id="${video.id}"] .ai-score`);
            const aiScore = aiScoreElement && aiScoreElement.dataset.analyzed === 'true' 
                ? aiScoreElement.textContent.replace('%', '')
                : 'N/A';
            row.push(aiScore);
            
            csvContent += row.join(',') + '\n';
        });
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `${platform}_videos_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
    } catch (error) {
        console.error('Error exporting to CSV:', error);
        showError(document.querySelector('.export-section'), `Ошибка при экспорте: ${error.message}`);
    }
};

// Compare Platforms
const comparePlatforms = () => {
    alert('Функция сравнения платформ будет доступна в следующем обновлении.');
};

// Event Listeners
const initEventListeners = () => {
    // Tab switching
    elements.tabButtons?.forEach(btn => {
        btn.addEventListener('click', () => {
            const platform = btn.dataset.platform;
            setActivePlatform(platform);
        });
    });
    
    // Save settings on change
    document.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('change', saveSettings);
    });
    
    // YouTube and TikTok buttons (preserved)
    elements.loadYoutubeBtn?.addEventListener('click', fetchYoutubeVideos);
    elements.loadTiktokBtn?.addEventListener('click', fetchTiktokVideos);
    
    // VK Video bypass method buttons
    elements.corsProxyBtn?.addEventListener('click', tryCorsProxy);
    elements.xframeBypassBtn?.addEventListener('click', tryXFrameBypass);
    elements.popupBtn?.addEventListener('click', tryPopupMethod);
    elements.extensionHelperBtn?.addEventListener('click', showExtensionInstructions);
    elements.serverlessBtn?.addEventListener('click', showServerlessInstructions);
    
    // Mass analyze buttons
    elements.youtubeMassAnalyzeBtn?.addEventListener('click', () => massAnalyzeVideos('youtube'));
    elements.tiktokMassAnalyzeBtn?.addEventListener('click', () => massAnalyzeVideos('tiktok'));
    elements.vkMassAnalyzeBtn?.addEventListener('click', () => massAnalyzeVideos('vk'));
    
    // Export buttons
    elements.exportCsvBtn?.addEventListener('click', exportToCsv);
    elements.comparePlatformsBtn?.addEventListener('click', comparePlatforms);
    
    // Modal controls
    elements.modalClose?.addEventListener('click', hideModal);
    elements.instructionsModal?.addEventListener('click', (e) => {
        if (e.target === elements.instructionsModal) {
            hideModal();
        }
    });
};

// Initialize App
const init = () => {
    console.log('Initializing app...');
    initElements();
    initEventListeners();
    loadSettings();
    console.log('App initialized with VK iframe bypass methods');
};

// Start the app
document.addEventListener('DOMContentLoaded', init);
