var index = 0
var currentType =""

function stat(type, url) {
    
    setTimeout(() => {
        location.href = url;
    }, 1000)
}

function onDownload(type, tolink = '') {

     copyText(dataMap.copyText)

    // model(dataMap.copyText)
    currentType = type
    switch (type) {
        case "android":
            //document.getElementById('downloadAndroid').style.display = "flex"
            stat(1, dataMap.androidLink)
            // model("复制成功")
            break;
        case "pwa":
            //document.getElementById('downloadAndroid').style.display = "flex"
            stat(1, dataMap.pwaLink)
            // model("复制成功")
            break;
        case "ios":
            //document.getElementById('downloadIOS').style.display = "flex"
            stat(4, dataMap.iosLink)
            // model("复制成功")
            break;
        case "webapp":
            location.href = dataMap.webAppLink;
            break;
    }

}

function showTip(type, tolink = '') {

    copyText(dataMap.copyText)

    // model(dataMap.copyText)
    currentType = type
    switch (type) {
        case "android":
            document.getElementById('downloadAndroid').style.display = "flex"
            //stat(1, dataMap.androidLink)
            break;
        case "ios":
            document.getElementById('downloadIOS').style.display = "flex"
            //stat(4, dataMap.macLink)
            break;
    }

}

function onSettingAllowApp(type) {
    currentType = type
    switch (type) {
        case "allow-app":
            document.getElementById('settingAllow').style.display = "flex"
            break;
    }
}




function onBack(type) {

    switch (type) {
        case 'tutorial':
            document.getElementById('tutorialId').style.display = "none"
            break;
        case 'setting-disable':
            document.getElementById('settingDisableId').style.display = "none"
            break; 
        case 'setting-allow':
            document.getElementById('settingAllow').style.display = "none"
            break;
        case 'download-android':
            document.getElementById('downloadAndroid').style.display = "none"
            break;
        case 'downloadios':
            document.getElementById('downloadIOS').style.display = "none"
            break;
        default:
    }
}

function onSetting(type) {
    document.getElementById('tutorialId').style.display = "block"
    switch (type) {
        case "huawei":
            document.getElementById('tutorialImgId').src = "static/image/img-4.png"
            document.getElementById('navId').innerHTML = "华为手机安装APP和杀毒设置"
            break;
        case "vivo":
            document.getElementById('tutorialImgId').src = "static/image/img-5.png"
            document.getElementById('navId').innerHTML = "VIVO手机安装APP和杀毒设置"
            break;
        case "oppo":
            document.getElementById('tutorialImgId').src = "static/image/img-6.png"
            document.getElementById('navId').innerHTML = "OPPO手机安装APP和杀毒设置"
            break;
        case "meizu":
            document.getElementById('tutorialImgId').src = "static/image/img-7.png"
            document.getElementById('navId').innerHTML = "魅族手机安装APP和杀毒设置"
            break;
        case "xiaomi":
            document.getElementById('tutorialImgId').src = "static/image/img-8.png"
            document.getElementById('navId').innerHTML = "小米手机安装APP和杀毒设置"
            break;
        default:
    }
}

function onSettingDisableApp(type) {
    document.getElementById('settingDisableId').style.display = "block"
    switch (type) {
        case "disable-app":
            document.getElementById('settingDisableImgId').src = "static/image/u-1.png"
            document.getElementById('navsId').innerHTML = "禁止安装恶意软件设置"
            break;
        default:
    }
}


function toDownload() {
    var agent = navigator.userAgent.toLocaleUpperCase()
    let isIos = /iphone/i.test(agent)
    let isAndriod = /android/i.test(agent)
    let isMac = /macintosh|mac os x/i.test(agent)
    let isWin = /windows|win32/i.test(agent);
    let ispad = /iPad/i.test(agent);
    if (isIos || ispad) {
        setTimeout(() => {
            location.href = dataMap.iosLink;
        }, 1000)
    } else if (isAndriod) {
        setTimeout(() => {
            location.href = dataMap.androidLink;
        }, 1000)
    } else {
        setTimeout(() => {
            location.href = dataMap.androidLink;
        }, 1000)
    }
}

function pgxiazai() {
    toDownload()
}

function model(str) {
    document.getElementById('modelId').style.display = "flex"
    document.getElementById('tipsId').innerHTML = str
    setTimeout(() => {
        document.getElementById('modelId').style.display = "none"
    }, 1000)
}


function copyText(obj) {
    
    if (!obj) {
        return false;
    }
    var text;
    if (typeof (obj) == 'object') {
        if (obj.nodeType) { // DOM node
            obj = $(obj); // to jQuery object
        }
        try {
            text = obj.text();
            if (!text) { // Maybe <textarea />
                text = obj.val();
            }
        } catch (err) { // as JSON
            text = JSON.stringify(obj);
        }
    } else {
        text = obj;
    }
    
    var $temp = $('<textarea>');
    $('body').append($temp);
    $temp.val(text).select();
    var res = document.execCommand('copy');
    $temp.remove();
    return res;
}