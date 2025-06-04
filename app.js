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
        "clickElementsCssSelector": "[aria-expanded=\"false\"]",
        "clientSideMinChangePercentage": 15,
        "crawlerType": "playwright:adaptive",
        "debugLog": false,
        "debugMode": false,
        "expandIframes": true,
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
                "value": "%7B%22data%22%3A%5B%5B1749054984%2C%22unique_adblock_users%22%2C0%2C%22web2%22%2C%22true%22%2C%22resource%22%2C%22video%22%5D%2C%5B1749054984%2C%22unique_adblock_users%22%2C0%2C%22web2%22%2C%22true%22%2C%22resource%22%2C%22video%22%5D%5D%2C%22uniqueId%22%3A380364391.4830178%7D",
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
        "removeElementsCssSelector": "nav, footer, script, style, noscript, svg, img[src^='data:'],\n[role=\"alert\"],\n[role=\"banner\"],\n[role=\"dialog\"],\n[role=\"alertdialog\"],\n[role=\"region\"][aria-label*=\"skip\" i],\n[aria-modal=\"true\"]",
        "renderingTypeDetectionPercentage": 10,
        "respectRobotsTxtFile": true,
        "saveFiles": false,
        "saveHtml": true,
        "saveHtmlAsFile": false,
        "saveMarkdown": true,
        "saveScreenshots": false,
        "startUrls": [
            {
                "url": "https://vkvideo.ru/trends",
                "method": "GET"
            }
        ],
        "useSitemaps": false,
        "includeUrlGlobs": [],
        "excludeUrlGlobs": [],
        "initialConcurrency": 0,
        "maxConcurrency": 200,
        "maxSessionRotations": 10,
        "maxRequestRetries": 5,
        "requestTimeoutSecs": 60,
        "minFileDownloadSpeedKBps": 128,
        "dynamicContentWaitSecs": 10,
        "waitForSelector": "",
        "softWaitForSelector": "",
        "maxScrollHeightPixels": 5000,
        "keepElementsCssSelector": "",
        "htmlTransformer": "readableText",
        "maxResults": 9999999
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
             publishedAt = videoData.uploadDate || 'Недавно';
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

const fetchVkVideos = async () => {
    try {
        const apifyToken = elements.apifyToken?.value;
        
        if (!apifyToken) {
            showError(elements.vkVideosGrid, 'Необходим Apify API токен для загрузки VK видео');
            updateApiStatus('vk', 'error');
            return;
        }
        
        updateApiStatus('vk', 'loading');
        const loadingIndicator = showLoading(elements.vkVideosGrid, 'Запуск Apify Website Content Crawler...');
        
        // Запуск Actor
        const runResponse = await fetch(`${CONFIG.platforms.vk.apiEndpoint}/${CONFIG.platforms.vk.apifyActor}/runs?token=${apifyToken}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CONFIG.platforms.vk.runInput)
        });
        
        if (!runResponse.ok) {
            const errorText = await runResponse.text();
            throw new Error(`Apify API Error ${runResponse.status}: ${errorText}`);
        }
        
        const runData = await runResponse.json();
        
        // ДОБАВИТЬ проверку структуры ответа
        if (!runData || !runData.data) {
            throw new Error('Неверный формат ответа от Apify API при создании run');
        }
        
        const runId = runData.data.id;
        
        if (!runId) {
            throw new Error('Не получен ID run от Apify API');
        }
        
        console.log(`Apify run started with ID: ${runId}`);
        
        // Ожидание завершения с улучшенной обработкой ошибок
        const completedRun = await waitForApifyCompletion(runId, apifyToken);
        
        // Получение результатов
        const resultsResponse = await fetch(
            `https://api.apify.com/v2/acts/apify~website-content-crawler/runs/${runId}/dataset/items?token=${apifyToken}&format=json&clean=true`
        );
        
        if (!resultsResponse.ok) {
            throw new Error(`Failed to get results: ${resultsResponse.status} ${resultsResponse.statusText}`);
        }
        
        const crawlResults = await resultsResponse.json();
            console.log(`Получено ${crawlResults.length} результатов от Apify`);

// Логируем первый результат для отладки
if (crawlResults.length > 0) {
    console.log('Первый результат Apify:', {
        url: crawlResults[0].url,
        htmlLength: crawlResults[0].html?.length || 0,
        textLength: crawlResults[0].text?.length || 0
    });
}

const videos = parseVkVideosFromCrawlResults(crawlResults);
console.log(`Распарсено видео: ${videos.length}`);
        
        if (loadingIndicator && loadingIndicator.parentNode) {
            loadingIndicator.remove();
        }
        
        updateApiStatus('vk', 'success');
        state.videos.vk = videos;
        
        renderVideos('vk', videos);
        
        if (elements.vkMassAnalysis) {
            elements.vkMassAnalysis.classList.remove('hidden');
        }
        
    } catch (error) {
        console.error('Error fetching VK videos:', error);
        
        if (loadingIndicator && loadingIndicator.parentNode) {
            loadingIndicator.remove();
        }
        
        showError(elements.vkVideosGrid, `Ошибка при загрузке видео: ${error.message}`);
        updateApiStatus('vk', 'error');
    }
};


const parseVkVideosFromCrawlResults = (crawlResults) => {
    const videos = [];
    
    if (!crawlResults || crawlResults.length === 0) {
        console.warn('Нет данных от Apify Website Content Crawler');
        return videos;
    }
    
    console.log('Parsing VK videos from Apify results:', crawlResults.length);
    
    // Берем первый результат (главная страница трендов)
    const mainResult = crawlResults[0];
    const htmlContent = mainResult.html || mainResult.text || '';
    
    if (!htmlContent) {
        console.warn('HTML контент отсутствует в результатах Apify');
        return videos;
    }
    
    // Создаем временный DOM для парсинга
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    // Ищем все видео блоки по data-id атрибуту
    const videoElements = tempDiv.querySelectorAll('[data-id^="video_item_"], div[id^="video_item_"]');
    
    console.log(`Найдено ${videoElements.length} видео элементов`);
    
    videoElements.forEach((videoElement, index) => {
        try {
            // Извлекаем ID видео
            const videoId = videoElement.getAttribute('data-id') || 
                           videoElement.id.replace('video_item_', '') || 
                           `vk-${index + 1}`;
            
            // Извлекаем ссылку на видео
            const linkElement = videoElement.querySelector('a[href*="vkvideo.ru/video"], a[href*="vk.com/video"]');
            const videoUrl = linkElement ? linkElement.href : `https://vkvideo.ru/video${videoId}`;
            
            // Извлекаем заголовок из aria-label или alt атрибута
            let title = '';
            if (linkElement && linkElement.getAttribute('aria-label')) {
                title = linkElement.getAttribute('aria-label')
                    .replace(/^Видео\s+/, '')
                    .replace(/\s+длительностью.*$/, '')
                    .trim();
            }
            
            if (!title) {
                const imgElement = videoElement.querySelector('img[alt]');
                title = imgElement ? imgElement.alt : `VK Video ${index + 1}`;
            }
            
            // Извлекаем тамбнейл
            const imgElement = videoElement.querySelector('img[src], img[data-thumb]');
            const thumbnail = imgElement ? 
                (imgElement.src || imgElement.getAttribute('data-thumb')) : 
                `https://via.placeholder.com/320x180/00AEEF/FFFFFF?text=VK+${index + 1}`;
            
            // Извлекаем статистику из span элементов
            const statsElements = videoElement.querySelectorAll('span');
            let views = 0;
            let uploadDate = 'Недавно';
            let description = '';
            
            statsElements.forEach(span => {
                const text = span.textContent.trim();
                
                // Ищем просмотры
                if (text.includes('просмотр') || text.includes('млн') || text.includes('тыс')) {
                    const viewsMatch = text.match(/([\d,]+(?:\.\d+)?)\s*(млн|тыс)?/);
                    if (viewsMatch) {
                        let viewsNum = parseFloat(viewsMatch[1].replace(',', '.'));
                        if (viewsMatch[2] === 'млн') viewsNum *= 1000000;
                        if (viewsMatch[2] === 'тыс') viewsNum *= 1000;
                        views = Math.floor(viewsNum);
                    }
                }
                
                // Ищем дату
                if (text.includes('день') || text.includes('час') || text.includes('минут') || text.includes('назад')) {
                    uploadDate = text;
                }
                
                // Ищем описание (длинный текст)
                if (text.length > 50 && !text.includes('просмотр') && !text.includes('назад')) {
                    description = text.substring(0, 200) + '...';
                }
            });
            
            // Извлекаем автора канала (если есть)
            let author = 'VK User';
            const authorElements = videoElement.querySelectorAll('*');
            for (let elem of authorElements) {
                const text = elem.textContent?.trim();
                if (text && text.length > 3 && text.length < 50 && 
                    !text.includes('просмотр') && !text.includes('назад') && 
                    !text.includes('млн') && !text.includes('тыс') &&
                    !text.match(/^\d/)) {
                    author = text;
                    break;
                }
            }
            
            const videoData = {
                id: videoId,
                title: title || `Трендовое видео VK ${index + 1}`,
                author: author,
                views: views,
                likes: Math.floor(views * 0.05), // Примерная оценка лайков
                comments: Math.floor(views * 0.01), // Примерная оценка комментариев  
                date: Math.floor(Date.now() / 1000) - (index * 3600), // Примерные даты
                image: thumbnail,
                url: videoUrl,
                description: description || 'Описание недоступно',
                uploadDate: uploadDate
            };
            
            videos.push(videoData);
            console.log(`Parsed video ${index + 1}:`, videoData.title);
            
        } catch (error) {
            console.error(`Ошибка парсинга видео ${index + 1}:`, error);
        }
    });
    
    console.log(`Успешно распарсено ${videos.length} видео`);
    return videos.slice(0, 20); // Ограничиваем до 20 видео
};

const waitForApifyCompletion = async (runId, token) => {
    const maxWaitTime = 300000; // 5 минут
    const checkInterval = 10000; // 10 секунд
    const startTime = Date.now();
    
    console.log('Starting wait for completion, runId:', runId, 'token length:', token ? token.length : 'no token');
    
    while (Date.now() - startTime < maxWaitTime) {
        try {
            const statusResponse = await fetch(
                `https://api.apify.com/v2/acts/runs/${runId}?token=${token}`
            );
            
            if (!statusResponse.ok) {
                throw new Error(`Status check failed: ${statusResponse.status} ${statusResponse.statusText}`);
            }
            
            const statusData = await statusResponse.json();
            
            // ИСПРАВЛЕНИЕ: Проверяем наличие поля data
            if (!statusData) {
                console.warn('Получен пустой ответ от Apify API');
                await new Promise(resolve => setTimeout(resolve, checkInterval));
                continue;
            }
            
            if (!statusData.data) {
                console.warn('Отсутствует поле data в ответе Apify API:', statusData);
                await new Promise(resolve => setTimeout(resolve, checkInterval));
                continue;
            }
            
            const status = statusData.data.status;
            console.log(`Run status: ${status}`);
            
            if (status === 'SUCCEEDED') {
                console.log('Apify run completed successfully');
                return statusData.data;
            } else if (status === 'FAILED' || status === 'ABORTED' || status === 'TIMED-OUT') {
                const errorMessage = statusData.data.statusMessage || `Run ${status.toLowerCase()}`;
                throw new Error(`Apify run ${status.toLowerCase()}: ${errorMessage}`);
            }
            
            // Показываем прогресс если доступен
            if (statusData.data.stats) {
                const stats = statusData.data.stats;
                console.log(`Progress: ${stats.itemsCount || 0} items, ${stats.requestsFinished || 0} requests finished`);
            }
            
        } catch (error) {
            console.error('Error checking run status:', error);
            
            // Если это сетевая ошибка, продолжаем попытки
            if (error.name === 'TypeError' || error.message.includes('fetch')) {
                console.log('Network error, retrying...');
            } else {
                // Для других ошибок прерываем
                throw error;
            }
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
        
        // ДОБАВИТЬ специальную обработку для VK
        let promptData;
        if (platform === 'vk') {
            promptData = prepareVkVideoForAI(videoData);
        } else {
            // Для YouTube и TikTok используем стандартную обработку
            promptData = JSON.stringify(videoData);
        }
        
        const videoId = videoData.id;
        const analysisContainer = document.getElementById(`analysis-${videoId}`);
        const aiScoreElement = document.querySelector(`.video-card[data-video-id="${videoId}"] .ai-score`);
        const analyzeBtn = document.querySelector(`.video-card[data-video-id="${videoId}"] .analyze-btn`);
        
        if (!analysisContainer || !aiScoreElement || !analyzeBtn) return;
        
        // Disable button and show loading
        analyzeBtn.disabled = true;
        analyzeBtn.textContent = 'Анализ...';
        
        // ЗДЕСЬ МОЖНО ДОБАВИТЬ РЕАЛЬНЫЙ ЗАПРОС К OPENROUTER
        // Пока используем симуляцию
        if (platform === 'vk') {
    const prompt = `Проанализируй привлекательность этого VK видео для российской молодежи 14-20 лет:

${promptData}

Критерии для оценки:
- Визуальная привлекательность и динамичность
- Актуальные тренды и челленджи
- Музыкальный контент
- Блогерский lifestyle контент
- Юмор и мемы
- Интерактивность

Верни ТОЛЬКО число (процент от 0 до 100) и 3-4 коротких тезиса.`;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${openrouterKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: elements.openrouterModel?.value || 'deepseek/deepseek-r1-0528:free',
            messages: [{ role: 'user', content: prompt }]
        })
    });

    const result = await response.json();
    const aiResponse = result.choices[0].message.content;
    
    // Извлекаем процент из ответа
    const scoreMatch = aiResponse.match(/(\d+)%/);
    const aiScore = scoreMatch ? parseInt(scoreMatch[1]) : Math.floor(55 + (hash % 40));
    
} else {
    // Для YouTube и TikTok используем старую логику
    await new Promise(resolve => setTimeout(resolve, 2000));
    const hash = videoId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const aiScore = Math.floor(55 + (hash % 40));
}
        
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
        // Остальная обработка ошибок...
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
