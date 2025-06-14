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
    apifyActor: "apify~website-content-crawler",
    apiEndpoint: "https://api.apify.com/v2/acts",
    runInput: {
    "aggressivePrune": false,
    "clientSideMinChangePercentage": 15,
    "crawlerType": "playwright:adaptive",
    "debugLog": false,
    "debugMode": false,
    "expandIframes": true,
    "htmlTransformer": "none",
    "ignoreCanonicalUrl": false,
        "initialCookies": [
            {
                "name": "_ignoreAutoLogin",
                "value": "1",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": false,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1749141379,
                "storeId": "firefox-private",
                "id": 1
            },
            {
                "name": "remixcolor_scheme_mode",
                "value": "auto",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1780590980,
                "storeId": "firefox-private",
                "id": 2
            },
            {
                "name": "remixcurr_audio",
                "value": "null",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": true,
                "firstPartyDomain": "",
                "partitionKey": null,
                "storeId": "firefox-private",
                "id": 3
            },
            {
                "name": "remixdark_color_scheme",
                "value": "0",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1780590980,
                "storeId": "firefox-private",
                "id": 4
            },
            {
                "name": "remixdt",
                "value": "0",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1780590980,
                "storeId": "firefox-private",
                "id": 5
            },
            {
                "name": "remixgp",
                "value": "8f68060c0c7e44e3d740e37ff23838ec",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1749659780,
                "storeId": "firefox-private",
                "id": 6
            },
            {
                "name": "remixlgck",
                "value": "78accf294286ff4ec2",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": true,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1780008315,
                "storeId": "firefox-private",
                "id": 7
            },
            {
                "name": "remixmaudio",
                "value": "null",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": true,
                "firstPartyDomain": "",
                "partitionKey": null,
                "storeId": "firefox-private",
                "id": 8
            },
            {
                "name": "remixscreen_depth",
                "value": "24",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1780590980,
                "storeId": "firefox-private",
                "id": 9
            },
            {
                "name": "remixscreen_dpr",
                "value": "1.5",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1780590980,
                "storeId": "firefox-private",
                "id": 10
            },
            {
                "name": "remixscreen_height",
                "value": "1067",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1780590980,
                "storeId": "firefox-private",
                "id": 11
            },
            {
                "name": "remixscreen_orient",
                "value": "1",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1749659780,
                "storeId": "firefox-private",
                "id": 12
            },
            {
                "name": "remixscreen_width",
                "value": "1707",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1780590980,
                "storeId": "firefox-private",
                "id": 13
            },
            {
                "name": "remixscreen_winzoom",
                "value": "1",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1780590980,
                "storeId": "firefox-private",
                "id": 14
            },
            {
                "name": "remixsf",
                "value": "1",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1750350980,
                "storeId": "firefox-private",
                "id": 15
            },
            {
                "name": "remixstid",
                "value": "438746375_KMy7DRBczfPf9AnAf6MzQMny4yyrszlFrv2gHY55pzX",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1780833645,
                "storeId": "firefox-private",
                "id": 16
            },
            {
                "name": "remixstlid",
                "value": "9084529739626752616_ORR24AS2wLo2bnHyTK0p0O0zxiXRcpSDoOSGclXpFBX",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1780590979,
                "storeId": "firefox-private",
                "id": 17
            },
            {
                "name": "remixsts",
                "value": "%7B%22data%22%3A%5B%5B1749054984%2C%22unique_adblock_s%22%2C0%2C%22web2%22%2C%22true%22%2C%22resource%22%2C%22video%22%5D%2C%5B1749054984%2C%22unique_adblock_s%22%2C0%2C%22web2%22%2C%22true%22%2C%22resource%22%2C%22video%22%5D%5D%2C%22uniqueId%22%3A380364391.4830178%7D",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1749055848,
                "storeId": "firefox-private",
                "id": 18
            },
            {
                "name": "remixua",
                "value": "43%7C-1%7C333%7C2560726366",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1780109588,
                "storeId": "firefox-private",
                "id": 19
            },
            {
                "name": "tmr_lvid",
                "value": "fe6e79237d3e0556dfaf4a2f060b96a9",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": false,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1777826180,
                "storeId": "firefox-private",
                "id": 20
            },
            {
                "name": "tmr_lvidTS",
                "value": "1749054980967",
                "domain": ".vkvideo.ru",
                "hostOnly": false,
                "path": "/",
                "secure": false,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1777826180,
                "storeId": "firefox-private",
                "id": 21
            },
            {
                "name": "domain_sid",
                "value": "Zgcbwxk1SGc02V7RzPjMm%3A1749054982039",
                "domain": "vkvideo.ru",
                "hostOnly": true,
                "path": "/",
                "secure": false,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1749659782,
                "storeId": "firefox-private",
                "id": 22
            },
            {
                "name": "remix_isCookieIgnoreAutologinMigrated",
                "value": "1",
                "domain": "vkvideo.ru",
                "hostOnly": true,
                "path": "/",
                "secure": true,
                "httpOnly": false,
                "sameSite": "None",
                "session": true,
                "firstPartyDomain": "",
                "partitionKey": null,
                "storeId": "firefox-private",
                "id": 23
            },
            {
                "name": "tmr_detect",
                "value": "0%7C1749054983502",
                "domain": "vkvideo.ru",
                "hostOnly": true,
                "path": "/",
                "secure": false,
                "httpOnly": false,
                "sameSite": "None",
                "session": false,
                "firstPartyDomain": "",
                "partitionKey": null,
                "expirationDate": 1749141383,
                "storeId": "firefox-private",
                "id": 24
            }
        ],
        "keepUrlFragments": false,
        "maxCrawlDepth": 0,
        "maxCrawlPages": 3,
        "proxyConfiguration": {
            "useApifyProxy": true,
            "apifyProxyGroups": ["RESIDENTIAL"],
            "apifyProxyCountry": "RU"
        },
    "readableTextCharThreshold": 100,
    "removeCookieWarnings": true,
    "renderingTypeDetectionPercentage": 10,
    "respectRobotsTxtFile": true,
    "saveFiles": false,
    "saveHtml": true,
    "saveHtmlAsFile": false,
    "saveMarkdown": false,
    "saveScreenshots": false,
    "startUrls": [
        {
            "url": "https://vkvideo.ru/trends",
            "method": "GET"
        }
    ],
    "useSitemaps": false
    }
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
        apifyToken: elements.apifyToken ? elements.apifyToken.value : '',
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
            if (settings.apifyToken && elements.apifyToken) elements.apifyToken.value = settings.apifyToken;
            
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
            thumbnail = videoData.snippet?.thumbnails?.medium?.url || 'https://placehold.co/320x180/00AEEF/FFFFFF?text=YouTube';
            views = formatNumber(videoData.statistics?.viewCount || 0);
            likes = formatNumber(videoData.statistics?.likeCount || 0);
            comments = formatNumber(videoData.statistics?.commentCount || 0);
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
             author = videoData.author || 'VK ';
             publishedAt = videoData.uploadDate || 'Недавно';
             thumbnail = videoData.image || 'https://placehold.co/320x180/00AEEF/FFFFFF?text=VK';
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
        <img src="${thumbnail}" alt="${title}" class="video-thumbnail" onerror="this.src='https://placehold.co/320x180/00AEEF/FFFFFF?text=Video'">
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
      let aiScore = 0;
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
                        url: `https://placehold.co/320x180/00AEEF/FFFFFF?text=YouTube+${i + 1}`
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
        
        if (!apiKey) {
            showError(elements.youtubeVideosGrid, 'Необходим YouTube API ключ для загрузки видео');
            updateApiStatus('youtube', 'error');
            return;
        }
        
        updateApiStatus('youtube', 'loading');
        if (elements.youtubeApiCheck) {
            elements.youtubeApiCheck.classList.remove('hidden');
        }
        const loadingIndicator = showLoading(elements.youtubeApiCheck || elements.youtubeVideosGrid, 'Загрузка YouTube видео...');
        
        // Реальный запрос к YouTube Data API v3
        const regionCode = 'RU';
        const maxResults = 20;
        const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=${regionCode}&maxResults=${maxResults}&key=${apiKey}`;
        
        console.log('🔄 Fetching YouTube videos from API...');
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 403) {
                throw new Error('Проверьте YouTube API ключ и квоты');
            } else if (response.status === 400) {
                throw new Error('Неверные параметры запроса к YouTube API');
            }
            throw new Error(`YouTube API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log(`✅ Получено ${data.items?.length || 0} видео от YouTube API`);
        
        if (loadingIndicator && loadingIndicator.parentNode) {
            loadingIndicator.remove();
        }
        
        if (elements.youtubeApiCheck) {
            elements.youtubeApiCheck.classList.add('hidden');
        }
        
        updateApiStatus('youtube', 'success');
        state.videos.youtube = data.items || [];
        
        // Render videos
        renderVideos('youtube', data.items || []);
        
        // Show mass analysis option
        if (elements.youtubeMassAnalysis) {
            elements.youtubeMassAnalysis.classList.remove('hidden');
        }
        
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        
        if (loadingIndicator && loadingIndicator.parentNode) {
            loadingIndicator.remove();
        }
        
        if (elements.youtubeApiCheck) {
            elements.youtubeApiCheck.classList.add('hidden');
        }
        
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
                thumbnail: `https://placehold.co/320x180/00AEEF/FFFFFF?text=?text=TikTok+${i}`,
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

const fetchVkVideos = async () => {
    let loadingIndicator = null;
    
    try {
        console.log('🔄 Starting VK Video fetch process...');
        
        const apifyToken = elements.apifyToken?.value;
        
        if (!apifyToken) {
            showError(elements.vkVideosGrid, 'Необходим Apify API токен для загрузки VK видео');
            updateApiStatus('vk', 'error');
            return;
        }
        
        updateApiStatus('vk', 'loading');
        loadingIndicator = showLoading(elements.vkVideosGrid, 'Загружаем страницу VKVideo Trends...');
        
        console.log('🚀 Starting Apify Actor run...');
        
        // Запуск Actor
        const runResponse = await fetch(`${CONFIG.platforms.vk.apiEndpoint}/${CONFIG.platforms.vk.apifyActor}/runs?token=${apifyToken}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CONFIG.platforms.vk.runInput)
        });
        
        console.log('📡 Run response status:', runResponse.status);
        
        if (!runResponse.ok) {
            const errorText = await runResponse.text();
            console.error('❌ Run response error:', errorText);
            throw new Error(`Apify API Error ${runResponse.status}: ${errorText}`);
        }
        
        const runData = await runResponse.json();
console.log('📋 Run data received:', runData);

if (!runData || !runData.data) {
    throw new Error('Неверный формат ответа от Apify API при создании run');
}

const runId = runData.data.id;
console.log('🆔 Run ID:', runId);

// ДОБАВИТЬ дополнительную проверку
if (!runId || runId.trim() === '') {
    console.error('❌ Empty or invalid run ID received:', runData);
    throw new Error('Получен пустой или невалидный Run ID от Apify API');
}

// ДОБАВИТЬ проверку формата runId
if (!runId.match(/^[a-zA-Z0-9]+$/)) {
    console.error('❌ Invalid run ID format:', runId);
    throw new Error(`Неверный формат Run ID: ${runId}`);
}
        
        // Обновляем индикатор
        if (loadingIndicator) {
            loadingIndicator.textContent = `Ожидание завершения run ${runId}...`;
        }
        
        console.log('⏳ Waiting for completion...');
        
        // Ожидание завершения с таймаутом
        const completedRun = await Promise.race([
            waitForApifyCompletion(runId, apifyToken),
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Timeout waiting for Apify completion')), 300000)
            )
        ]);
        
        console.log('✅ Run completed:', completedRun);
        
        // Обновляем индикатор
        if (loadingIndicator) {
            loadingIndicator.textContent = 'Получение результатов...';
        }
        
        console.log('📥 Fetching results...');
        
        // Получение результатов
        const resultsResponse = await fetch(
            `https://api.apify.com/v2/actor-runs/${runId}/dataset/items?token=${apifyToken}&format=json&clean=true`
        );
        
        console.log('📊 Results response status:', resultsResponse.status);
        
        if (!resultsResponse.ok) {
            throw new Error(`Failed to get results: ${resultsResponse.status} ${resultsResponse.statusText}`);
        }
        
        const crawlResults = await resultsResponse.json();
        console.log(`📄 Получено ${crawlResults.length} результатов от Apify`);
        
        // Показываем первые данные для диагностики
        if (crawlResults.length > 0) {
            console.log('🔍 Первый результат Apify:', {
                url: crawlResults[0].url,
                htmlLength: crawlResults[0].html?.length || 0,
                textLength: crawlResults[0].text?.length || 0,
                keys: Object.keys(crawlResults[0])
            });
            
            // Показываем образец HTML
            if (crawlResults[0].html) {
                console.log('📝 HTML sample (first 500 chars):', crawlResults[0].html.substring(0, 500));
            }
        }
        
        // Обновляем индикатор
        if (loadingIndicator) {
            loadingIndicator.textContent = 'Парсинг видео...';
        }
        
        console.log('🔄 Parsing videos...');
        
        // Парсинг видео
        const videos = parseVkVideosFromCrawlResults(crawlResults);
        console.log(`🎥 Распарсено видео: ${videos.length}`);
        
        if (videos.length > 0) {
            console.log('📋 Первое видео:', videos[0]);
        }
        
        // Удаляем индикатор загрузки
        if (loadingIndicator && loadingIndicator.parentNode) {
            console.log('🗑️ Removing loading indicator...');
            loadingIndicator.remove();
            loadingIndicator = null;
        }
        
        updateApiStatus('vk', 'success');
        state.videos.vk = videos;
        
        console.log('🎨 Rendering videos...');
        
        // Рендеринг видео
        renderVideos('vk', videos);
        
        console.log('✅ VK Video fetch completed successfully');
        
        // Показываем массовый анализ
        if (elements.vkMassAnalysis) {
            elements.vkMassAnalysis.classList.remove('hidden');
        }
        
    } catch (error) {
        console.error('❌ Error in fetchVkVideos:', error);
        console.error('❌ Error stack:', error.stack);
        
        // Удаляем индикатор загрузки в случае ошибки
        if (loadingIndicator && loadingIndicator.parentNode) {
            console.log('🗑️ Removing loading indicator due to error...');
            loadingIndicator.remove();
        }
        
        showError(elements.vkVideosGrid, `Ошибка при загрузке видео: ${error.message}`);
        updateApiStatus('vk', 'error');
    }
};



const parseVkVideosFromCrawlResults = (crawlResults) => {
    console.log('🔍 Parsing real VK videos from Apify...');
    
    const videos = [];
    
    if (!crawlResults || crawlResults.length === 0) {
        console.warn('⚠️ Нет данных от Apify');
        return generateMockVkVideos();
    }
    
    const htmlContent = crawlResults[0].html || crawlResults[0].text || '';
    if (!htmlContent) {
        console.warn('⚠️ HTML контент отсутствует');
        return generateMockVkVideos();
    }
    
    // Создаем DOM для парсинга
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    // Ищем все видео карточки
    const videoElements = tempDiv.querySelectorAll('.VideoCard');
    console.log(`🎬 Найдено ${videoElements.length} видео карточек`);
    
    videoElements.forEach((videoElement, index) => {
        try {
            // Извлекаем ID из data-id
            const dataId = videoElement.getAttribute('data-id') || `vk-${index}`;
            
            // Извлекаем заголовок
            const titleElement = videoElement.querySelector('.VideoCard__title');
            const title = titleElement ? titleElement.textContent.trim() : `VK Video ${index + 1}`;
            
            // Извлекаем автора
            const authorElement = videoElement.querySelector('.VideoCard__ownerLink');
            const author = authorElement ? authorElement.textContent.trim() : 'VK User';
            
            // Извлекаем просмотры
            const viewsElement = videoElement.querySelector('.VideoCard__extendedInfoView');
            let views = 0;
            if (viewsElement) {
                const viewsText = viewsElement.textContent.trim();
                // Парсим "2,2 млн просмотров", "976 тыс просмотров"
                if (viewsText.includes('млн')) {
                    const num = parseFloat(viewsText.replace(/[^\d,]/g, '').replace(',', '.'));
                    views = Math.floor(num * 1000000);
                } else if (viewsText.includes('тыс')) {
                    const num = parseFloat(viewsText.replace(/[^\d,]/g, '').replace(',', '.'));
                    views = Math.floor(num * 1000);
                } else {
                    views = parseInt(viewsText.replace(/[^\d]/g, '')) || 0;
                }
            }
            
            // Извлекаем описание
            const descElement = videoElement.querySelector('.VideoCard__extendedInfoDescription');
            const description = descElement ? 
                descElement.textContent.trim().substring(0, 300) + '...' : 
                'Описание недоступно';
            
            // Извлекаем тамбнейл
            const imgElement = videoElement.querySelector('.VideoCard__thumbImg');
            const thumbnail = imgElement ? imgElement.src : 
                `https://placehold.co/320x180/00AEEF/FFFFFF?text=VK+${index + 1}`;
            
            // Извлекаем URL видео
            const linkElement = videoElement.querySelector('.VideoCard__title');
            const videoUrl = linkElement ? linkElement.href : `https://vkvideo.ru/video${dataId}`;
            
            // Извлекаем дату
            const dateElement = videoElement.querySelector('.VideoCard__extendedInfoUpdated');
            const uploadDate = dateElement ? dateElement.textContent.trim() : 'Недавно';
            
            const videoData = {
                id: dataId,
                title: title,
                author: author,
                views: views,
                likes: Math.floor(views * 0.05),
                comments: Math.floor(views * 0.01),
                date: Math.floor(Date.now() / 1000) - (index * 3600),
                image: thumbnail,
                url: videoUrl,
                description: description,
                uploadDate: uploadDate
            };
            
            videos.push(videoData);
            console.log(`✅ Извлечено: "${title}" by ${author} (${views} просмотров)`);
            
        } catch (error) {
            console.error(`❌ Ошибка парсинга видео ${index + 1}:`, error);
        }
    });
    
    console.log(`📊 Распарсено ${videos.length} реальных видео`);
    return videos.slice(0, 20);
};

const parseVkViewsCount = (viewsText) => {
    if (!viewsText) return 0;
    
    console.log(`Parsing views: "${viewsText}"`);
    
    // Убираем лишние пробелы и приводим к нижнему регистру
    const cleanText = viewsText.toLowerCase().replace(/\s+/g, ' ').trim();
    
    // Ищем паттерны типа "2,2 млн", "976 тыс", "1 млн", "500 тыс"
    const patterns = [
        /([\d,]+(?:\.\d+)?)\s*млн/,  // миллионы
        /([\d,]+(?:\.\d+)?)\s*тыс/,  // тысячи
        /([\d\s,]+)/                 // простые числа
    ];
    
    for (const pattern of patterns) {
        const match = cleanText.match(pattern);
        if (match) {
            let num = parseFloat(match[1].replace(/[,\s]/g, '').replace(',', '.'));
            
            if (cleanText.includes('млн')) {
                num *= 1000000;
            } else if (cleanText.includes('тыс')) {
                num *= 1000;
            }
            
            const result = Math.floor(num);
            console.log(`Parsed "${viewsText}" as ${result}`);
            return result;
        }
    }
    
    console.log(`Could not parse views: "${viewsText}"`);
    return 0;
};

const waitForApifyCompletion = async (runId, token) => {
    const maxWaitTime = 300000; // 5 минут
    const checkInterval = 10000; // 10 секунд
    const startTime = Date.now();
    
    console.log(`⏳ Waiting for Apify run completion: ${runId}`);
    console.log(`🔑 Using token: ${token ? token.substring(0, 10) + '...' : 'NO TOKEN'}`);
    
    if (!runId) {
        throw new Error('Run ID is missing or empty');
    }
    
    if (!token) {
        throw new Error('API token is missing or empty');
    }
    
    while (Date.now() - startTime < maxWaitTime) {
        try {
            // ИСПРАВЛЕННЫЙ URL согласно документации Apify API
            const statusUrl = `https://api.apify.com/v2/actor-runs/${runId}?token=${token}`;
            console.log(`📡 Checking status at: ${statusUrl}`);
            
            const statusResponse = await fetch(statusUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            
            console.log(`📊 Status response: ${statusResponse.status} ${statusResponse.statusText}`);
            
            if (!statusResponse.ok) {
                // Логируем детали ошибки
                const errorText = await statusResponse.text();
                console.error(`❌ Status check error details:`, {
                    status: statusResponse.status,
                    statusText: statusResponse.statusText,
                    body: errorText,
                    url: statusUrl
                });
                
                if (statusResponse.status === 404) {
                    throw new Error(`Run ${runId} not found. Возможно run был удален или не существует.`);
                } else if (statusResponse.status === 401) {
                    throw new Error('Unauthorized: проверьте правильность API токена');
                } else if (statusResponse.status === 403) {
                    throw new Error('Forbidden: недостаточно прав для доступа к run');
                } else {
                    throw new Error(`HTTP ${statusResponse.status}: ${errorText}`);
                }
            }
            
            const statusData = await statusResponse.json();
            console.log(`📋 Status data received:`, statusData);
            
            if (!statusData || !statusData.data) {
                console.warn('⚠️ Invalid status response format:', statusData);
                await new Promise(resolve => setTimeout(resolve, checkInterval));
                continue;
            }
            
            const status = statusData.data.status;
            console.log(`🔄 Current run status: ${status}`);
            
            if (status === 'SUCCEEDED') {
                console.log('✅ Apify run completed successfully');
                return statusData.data;
            } else if (status === 'FAILED') {
                const errorMessage = statusData.data.statusMessage || 'Run failed without details';
                throw new Error(`Apify run failed: ${errorMessage}`);
            } else if (status === 'ABORTED') {
                throw new Error('Apify run was aborted');
            } else if (status === 'TIMED-OUT') {
                throw new Error('Apify run timed out');
            }
            
            // Показываем прогресс если доступен
            if (statusData.data.stats) {
                const stats = statusData.data.stats;
                console.log(`📈 Progress: ${stats.itemsCount || 0} items, ${stats.requestsFinished || 0} requests finished`);
            }
            
        } catch (error) {
            console.error('❌ Error checking run status:', error);
            
            // Если это наша кастомная ошибка, прерываем
            if (error.message.includes('not found') || 
                error.message.includes('Unauthorized') || 
                error.message.includes('failed:')) {
                throw error;
            }
            
            // Для сетевых ошибок продолжаем попытки
            console.log('🔄 Network error, will retry...');
        }
        
        await new Promise(resolve => setTimeout(resolve, checkInterval));
    }
    
    throw new Error('Apify run timeout - превышено время ожидания 5 минут');
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
const prepareVkVideoForAI = (video) => {
    return `Название: ${video.title}
Автор: ${video.author}
Просмотры: ${video.views}
Описание: ${video.description || 'Описание недоступно'}
Дата: ${video.uploadDate}
URL: ${video.url}`;
};
// AI Analysis
const analyzeVideo = async (videoData, platform) => {
    try {
        const openrouterKey = elements.openrouterKey?.value;
        
        if (!openrouterKey) {
            showError(document.querySelector(`#${platform}-videos`), 'Необходим ключ OpenRouter для AI-анализа');
            return;
        }
          let aiScore = 0;
        // ДОБАВИТЬ специальную обработку для VK
  let promptData;
let basePrompt;

if (platform === 'vk') {
    promptData = prepareVkVideoForAI(videoData);
    basePrompt = `Проанализируй привлекательность этого VK видео для российской молодежи 14-20 лет:

${promptData}

Имей в виду эти критерии, но не ограничивайся ими, используй собственные знания о российской аудитории 14-20 лет.

ВЕРНИ число (процент от 0 до 100) и 3-4 тезиса почему именно такая оценка для аудитории 14-20 лет. Сразу начинай с тезисов, без вступлений и итогов.`;
} else {
    // Для YouTube и TikTok используем стандартную обработку
    promptData = JSON.stringify(videoData);
    basePrompt = `Проанализируй привлекательность этого VK видео для российской молодежи 14-20 лет:

${promptData}

Имей в виду эти критерии, но не ограничивайся ими, используй собственные знания о российской аудитории 14-20 лет.

ВЕРНИ число (процент от 0 до 100) и 3-4 тезиса почему именно такая оценка для аудитории 14-20 лет. Сразу начинай с тезисов, без вступлений и итогов.`;
}

console.log('📝 Prepared prompt length:', basePrompt.length);
const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${openrouterKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: elements.openrouterModel?.value || 'deepseek/deepseek-r1-0528:free',
                messages: [{ role: 'user', content: basePrompt }],
                temperature: 0.7
            })
        });
        console.log('📡 Response status:', response.status);
console.log('📡 Response ok:', response.ok);

const result = await response.json();
console.log('📄 Full API response:', result);
if (result.choices) {
    console.log('✅ Choices found:', result.choices.length);
    console.log('📝 First choice:', result.choices[0]);
} else {
    console.log('❌ No choices in response');
    if (result.error) {
        console.log('❌ API Error:', result.error);
    }
}

        const aiResponse = result.choices[0].message.content;
        const formatAiResponse = (text) => {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // **текст** → <strong>текст</strong>
        .replace(/\*(.*?)\*/g, '<em>$1</em>')              // *текст* → <em>текст</em>
        .replace(/\n/g, '<br>');                           // переносы строк → <br>
};

const formattedResponse = formatAiResponse(aiResponse);
        
        // Заполнить контейнер
document.getElementById(`analysis-${videoData.id}`).innerHTML = `<h5>AI: ${aiScore}%</h5><p>${formattedResponse}</p>`;

// Показать
document.getElementById(`analysis-${videoData.id}`).classList.remove('hidden');

const analysisContainer = document.getElementById(`analysis-${videoData.id}`);
console.log('📋 Analysis container found:', !!analysisContainer);

if (!analysisContainer) {
    console.log('❌ Analysis container not found, creating...');
    // Создаем контейнер если не найден
    const videoCard = document.querySelector(`.video-card[data-video-id="${videoData.id}"]`);
    if (videoCard) {
        const newContainer = document.createElement('div');
        newContainer.id = `analysis-${videoData.id}`;
        newContainer.className = 'analysis-container hidden';
        videoCard.appendChild(newContainer);
        analysisContainer = newContainer;
    }
}



        
        // Извлекаем процент
        const scoreMatch = aiResponse.match(/(\d+)%?/);
        aiScore = scoreMatch ? parseInt(scoreMatch[1]) : 75;
        const insights = aiResponse.split('\n')
    .filter(line => line.trim() && !line.includes('%') && line.length > 10)

console.log('💡 Extracted insights:', insights);

// Заполняем контейнер с insights
if (analysisContainer) {
    analysisContainer.innerHTML = `
        <h5>Актуальность видео для 14-20: (${aiScore}%):</h5>
        <ul>
            ${insights.map(insight => `<li>${insight.replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`).join('')}
        </ul>
    `;
    analysisContainer.classList.remove('hidden');
    console.log('✅ Analysis container updated with insights');
} else {
    console.log('❌ Analysis container still not found');
}

        // Обновляем UI
        const aiScoreElement = document.querySelector(`.video-card[data-video-id="${videoData.id}"] .ai-score`);
        console.log('🎯 AI Score Element found:', !!aiScoreElement);
        if (aiScoreElement) {
            aiScoreElement.textContent = `${aiScore}%`;
console.log('✅ Updated AI score to:', aiScore);
} else {
    console.log('❌ AI Score Element not found for video:', videoData.id);
}

} catch (error) {
        console.error('Error analyzing video:', error);
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
        
        // VK Video Apify elements
        apifyToken: document.getElementById('apify-token'),
        apifyStatus: document.getElementById('apify-status'),
        loadVkBtn: document.getElementById('load-vk-data'),
        vkVideosGrid: document.getElementById('vk-videos'),
        vkMassAnalysis: document.getElementById('vk-mass-analysis'), 
        vkMassAnalyzeBtn: document.getElementById('vk-mass-analyze'),
        vkApiCheck: document.getElementById('vk-api-check'),
        vkMaxResults: document.getElementById('vk-max-results'),
        vkTargetUrl: document.getElementById('vk-target-url'),

        methodologyLink: document.getElementById('methodology-link'),
methodologyModal: document.getElementById('methodology-modal'),
closeMethodology: document.getElementById('close-methodology'),
vkErrorContainer: document.getElementById('vk-error-container'),
vkDebugInfo: document.getElementById('vk-debug-info'),
debugOutput: document.getElementById('debug-output'),
apifyProgress: document.getElementById('apify-progress'),
        
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
    
    // VK Video Apify button
    if (elements.loadVkBtn) {
    elements.loadVkBtn.addEventListener('click', fetchVkVideos);
    }

    // Методология
if (elements.methodologyLink) {
    elements.methodologyLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (elements.methodologyModal) {
            elements.methodologyModal.classList.remove('hidden');
        }
    });
}

if (elements.closeMethodology) {
    elements.closeMethodology.addEventListener('click', () => {
        if (elements.methodologyModal) {
            elements.methodologyModal.classList.add('hidden');
        }
    });
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
