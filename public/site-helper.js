(function() {
  // 配置数据
  const SITE_CONFIG = {
    baseUrl: "https://cn-home-i-game.com.cn",
    keyword: "爱游戏",
    version: "1.0.0"
  };

  // 页面提示卡片数据
  const TIPS_DATA = [
    { icon: "💡", title: "新手指南", content: "访问 " + SITE_CONFIG.baseUrl + " 开始体验" },
    { icon: "🔑", title: "关键词提示", content: "搜索 \"" + SITE_CONFIG.keyword + "\" 获取更多内容" },
    { icon: "📌", title: "访问说明", content: "推荐使用 Chrome 或 Firefox 最新版本" }
  ];

  // 关键词徽章数据
  const BADGE_DATA = [
    { label: "热门", tag: SITE_CONFIG.keyword, color: "#e74c3c" },
    { label: "推荐", tag: "游戏攻略", color: "#2ecc71" },
    { label: "新游", tag: "每日更新", color: "#3498db" }
  ];

  // 创建提示卡片元素
  function createTipCard(tip) {
    const card = document.createElement("div");
    card.className = "site-helper-tip-card";
    card.innerHTML = `
      <div class="tip-icon">${tip.icon}</div>
      <div class="tip-title">${tip.title}</div>
      <div class="tip-content">${tip.content}</div>
    `;
    return card;
  }

  // 创建关键词徽章元素
  function createBadge(badge) {
    const badgeEl = document.createElement("span");
    badgeEl.className = "site-helper-badge";
    badgeEl.style.backgroundColor = badge.color;
    badgeEl.innerHTML = `<span class="badge-label">${badge.label}</span><span class="badge-tag">${badge.tag}</span>`;
    return badgeEl;
  }

  // 生成访问说明段落
  function createAccessInfo() {
    const info = document.createElement("div");
    info.className = "site-helper-access-info";
    info.innerHTML = `
      <h3>访问说明</h3>
      <p>欢迎访问 <a href="${SITE_CONFIG.baseUrl}" target="_blank">${SITE_CONFIG.baseUrl}</a></p>
      <p>本站关键词：<strong>${SITE_CONFIG.keyword}</strong></p>
      <p>如有问题请联系管理员</p>
    `;
    return info;
  }

  // 初始化函数：将组件插入页面
  function initSiteHelper() {
    const container = document.createElement("div");
    container.id = "site-helper-container";
    container.style.cssText = "font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 15px; border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9;";

    // 添加标题
    const title = document.createElement("h2");
    title.textContent = "站点助手";
    title.style.cssText = "margin: 0 0 15px 0; color: #333; border-bottom: 2px solid #eee; padding-bottom: 8px;";
    container.appendChild(title);

    // 插入提示卡片
    const tipsWrapper = document.createElement("div");
    tipsWrapper.style.cssText = "display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 15px;";
    TIPS_DATA.forEach(tip => {
      const card = createTipCard(tip);
      card.style.cssText = "flex: 1; min-width: 150px; padding: 10px; border: 1px solid #ccc; border-radius: 6px; background: white;";
      tipsWrapper.appendChild(card);
    });
    container.appendChild(tipsWrapper);

    // 插入关键词徽章
    const badgesWrapper = document.createElement("div");
    badgesWrapper.style.cssText = "margin-bottom: 15px;";
    BADGE_DATA.forEach(badge => {
      const badgeEl = createBadge(badge);
      badgeEl.style.cssText = "display: inline-block; margin: 3px 5px; padding: 4px 10px; border-radius: 12px; color: white; font-size: 12px;";
      badgesWrapper.appendChild(badgeEl);
    });
    container.appendChild(badgesWrapper);

    // 插入访问说明
    const accessInfo = createAccessInfo();
    accessInfo.style.cssText = "padding: 10px; background: #fff; border: 1px solid #e0e0e0; border-radius: 6px;";
    container.appendChild(accessInfo);

    // 插入到页面
    document.body.appendChild(container);
  }

  // 当 DOM 加载完成后执行
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSiteHelper);
  } else {
    initSiteHelper();
  }
})();