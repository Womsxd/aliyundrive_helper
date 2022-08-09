// ==UserScript==
// @name         解决阿里云盘部分下载限制
// @version      0.2
// @description  下载文件大小和文件数量都改为Infinity
// @author       Womsxd
// @run-at       document-body
// @match        https://www.aliyundrive.com/drive
// @match        https://www.aliyundrive.com/drive/*
// @icon         https://gw.alicdn.com/imgextra/i3/O1CN01aj9rdD1GS0E8io11t_!!6000000000620-73-tps-16-16.ico
// @grant        none
// @license      WTFPL license
// @namespace    https://github.com/Womsxd/aliyundrive_helper
// ==/UserScript==

(function() {
    'use strict';
    //window.Global.max_download_size = window.Global.max_download_size * window.Global.max_download_size;
    window.Global.max_download_size = Infinity;
    window.Global.max_download_count = Infinity;
    console.log("已修改下载大小和下载数量限制");
})();
