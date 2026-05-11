const rawLeads = [
  ["3AK Chemie Pvt Ltd", "India", 1],
  ["3DIEMME S.r.l.", "Italy", 1],
  ["A. Schweickhardt GmbH & Co. KG", "Germany", 1],
  ["ABIMO", "Brazil", 1],
  ["ACH Medical Co., Ltd.", "Korea", 1],
  ["Acodent Pte Ltd", "Singapore", 1],
  ["ACRO Biomedical Co., Ltd.", "Taiwan", 1],
  ["A-dec International", "United States of America", 1],
  ["Aditek do Brasil SA", "Brazil", 1],
  ["Aditya Dispomed Products Pvt Ltd.", "India", 1],
  ["ADM Asia Pacific Pte Ltd", "Singapore", 1],
  ["Admetec", "Israel", 1],
  ["Advanced Healthcare Ltd", "United Kingdom", 1],
  ["Advanced Medical Solutions Group plc.", "United Kingdom", 1],
  ["AI Dental Technology Pte Ltd", "Singapore", 1],
  ["Aidite (Qinhuangdao) Technology Co., Ltd.", "China", 1],
  ["Alfred Becht", "Germany", 1],
  ["Alliedstar Medical Equipment Co., Ltd.", "China", 1],
  ["Amedcon Healthcare Manufacturing Ltd.", "Hong Kong SAR", 1],
  ["Angel Aligner", "Singapore", 1],
  ["Anhui Monique Medical Materials Co.,Ltd.", "China", 1],
  ["Anyang Meijinsheng Dental Material sales Co., Ltd", "China", 1],
  ["Aseptico", "United States of America", 1],
  ["Associated Dental Products Ltd", "United Kingdom", 2],
  ["Association for Oral Health Therapists, SG", "Singapore", 2],
  ["Astar Orthodontics Inc.", "China", 2],
  ["Audental Bio-material Co., Ltd", "China", 2],
  ["Authorised Service Pte Ltd", "Singapore", 2],
  ["B&B Dental Srl", "Italy", 2],
  ["B.J.M. Laboratories Ltd", "Israel", 2],
  ["BEGO Bremer Goldschlagerei", "Germany", 2],
  ["Beijing Nobel Asia-Pacific Education Technology Co., Ltd.", "China", 2],
  ["Besmile", "China", 2],
  ["Beyes Dental Inc.", "Canada", 2],
  ["BiLumix", "Korea", 2],
  ["Bio-Art Equipamentos Odontologicos Ltda", "Brazil", 2],
  ["Biomate Medical Devices Technology Co., Ltd", "Taiwan", 2],
  ["Bisco Inc.", "United States of America", 2],
  ["BKMEIYA Pte Ltd", "Singapore", 2],
  ["Blossom/Mexpo International Inc.", "United States of America", 2],
  ["Bluem Europe", "Netherlands", 2],
  ["Bluesail Medical Co.,Ltd", "China", 2],
  ["BLZ Technology (Wuhan) Co., Ltd.", "China", 2],
  ["Bomei Co., Ltd.", "Taiwan", 2],
  ["Borea", "France", 2],
  ["Boz Tibbi Malzeme Sanayi ve Ticaret A.S.", "Turkey", 2],
  ["BrightArk Pte Ltd", "Singapore", 2],
  ["Bryant Dental", "United Kingdom", 2],
  ["BTK Dental", "Italy", 2],
  ["Buletedan International Trade (Guangzhou) Co.Ltd", "China", 2],
  ["Calgin Enterprises Pte Ltd", "Singapore", 2],
  ["Carestream Dental Singapore Pte Ltd", "Singapore", 2],
  ["Carl Martin GmbH", "Germany", 2],
  ["Carl Zeiss Meditec AG", "Germany", 2],
  ["Cavex Holland BV", "Netherlands", 3],
  ["Centrix Dental", "United States of America", 3],
  ["Changsha Contec Yixin Biotechnology Co.,Ltd.", "China", 3],
  ["Changshou Shengkang Medical Instrument Co., Ltd.", "China", 3],
  ["Changzhou Sifary Medical Technology Co., Ltd.", "China", 3],
  ["Chaoyang Siwei Medical Technology", "China", 3],
  ["Chee Sang Dental Supply Pte Ltd", "Singapore", 3],
  ["Chuanheng (Henan) Medical Treatment Cheng Co., Ltd.", "China", 3],
  ["Ci Medical Co., Ltd.", "Japan", 3],
  ["CIMsystem HK LTD", "Hong Kong SAR", 3],
  ["CJ-Optik GmbH & Co. KG", "Germany", 3],
  ["Coherz Technologies Co., Ltd.", "China", 3],
  ["Colgate-Palmolive (Eastern) Pte. Ltd", "Singapore", 3],
  ["Coltene Whaledent AG", "Switzerland", 3],
  ["Contoral Pte Ltd", "Singapore", 3],
  ["Coswell S.p.A.", "Italy", 3],
  ["Curaden AG", "Switzerland", 3],
  ["Curasept S.p.A.", "Italy", 3],
  ["DaeKwang I.D.M", "Korea", 3],
  ["Davis, Schottlander & Davis Ltd", "United Kingdom", 3],
  ["Dendia GmbH", "Austria", 3],
  ["DENTAG SRL", "Italy", 3],
  ["Dental Asia (Pablo)", "Singapore", 3],
  ["Dental South China 2026", "China", 3],
  ["Dental Technologies Inc.", "United States of America", 3],
  ["Dental Tribune International", "Germany", 3],
  ["Dentalead Corporation", "Japan", 3],
  ["Dentalead Corporation", "Japan", 3],
  ["Dentalife", "Australia", 3],
  ["Dentamerica Asia Inc.", "Taiwan", 3],
  ["DenTech China 2026", "China", 3]
];

const networkProviders = [
  { key: "official", name: "官网搜索", hint: "定位官网、联系人和产品页" },
  { key: "linkedin", name: "LinkedIn", hint: "查看公司主页和员工线索" },
  { key: "finance", name: "股票搜索", hint: "搜索上市公司与行情代码" },
  { key: "reports", name: "公司财报", hint: "查年报、财报和投资者关系" },
  { key: "news", name: "新闻动态", hint: "查看近期市场、展会和产品消息" },
  { key: "import", name: "进口商线索", hint: "拓展采购商和分销商关键词" }
];

const tickerHints = {
  "Advanced Medical Solutions Group plc.": "AMS.L",
  "Carl Zeiss Meditec AG": "AFX.DE",
  "Colgate-Palmolive (Eastern) Pte. Ltd": "CL"
};

const regionByCountry = {
  "Australia": "大洋洲",
  "Austria": "欧洲",
  "Brazil": "拉美",
  "Canada": "北美",
  "China": "大中华区",
  "France": "欧洲",
  "Germany": "欧洲",
  "Hong Kong SAR": "大中华区",
  "India": "南亚",
  "Israel": "中东",
  "Italy": "欧洲",
  "Japan": "东亚",
  "Korea": "东亚",
  "Netherlands": "欧洲",
  "Singapore": "东南亚",
  "Switzerland": "欧洲",
  "Taiwan": "大中华区",
  "Turkey": "中东",
  "United Kingdom": "欧洲",
  "United States of America": "北美"
};

const marketByRegion = {
  "北美": "北美高价值采购市场",
  "欧洲": "欧洲品牌与分销市场",
  "东南亚": "东南亚增长市场",
  "东亚": "东亚渠道市场",
  "南亚": "南亚价格敏感市场",
  "中东": "中东项目采购市场",
  "拉美": "拉美进口分销市场",
  "大中华区": "中国及港澳台产业链市场",
  "大洋洲": "大洋洲稳定采购市场"
};

const typeOptions = ["全部", "品牌/制造商", "经销/贸易商", "行业协会/媒体", "教育/展会", "服务/技术"];
const storageKeys = {
  favorites: "shuoyi.client.finder.favorites",
  records: "shuoyi.client.finder.records"
};

const state = {
  keyword: "",
  country: "全部",
  region: "全部",
  market: "全部",
  product: "全部",
  type: "全部",
  favoritesOnly: false,
  view: "cards",
  selectedId: null
};

const favorites = new Set(readJSON(storageKeys.favorites, []));
const records = readJSON(storageKeys.records, {});

const customers = rawLeads.map((item, index) => enrichLead(item, index));

const els = {
  keyword: document.getElementById("keywordInput"),
  country: document.getElementById("countrySelect"),
  region: document.getElementById("regionSelect"),
  market: document.getElementById("marketSelect"),
  product: document.getElementById("productSelect"),
  typeTabs: document.getElementById("typeTabs"),
  favoritesOnly: document.getElementById("favoritesOnly"),
  results: document.getElementById("results"),
  emptyState: document.getElementById("emptyState"),
  resultCount: document.getElementById("resultCount"),
  countryCount: document.getElementById("countryCount"),
  favoriteCount: document.getElementById("favoriteCount"),
  networkCount: document.getElementById("networkCount"),
  resultSummary: document.getElementById("resultSummary"),
  activeFilters: document.getElementById("activeFilters"),
  queryPills: document.getElementById("queryPills"),
  detailPanel: document.getElementById("detailPanel"),
  detailContent: document.getElementById("detailContent"),
  closeDetail: document.getElementById("closeDetailBtn"),
  exportBtn: document.getElementById("exportBtn"),
  resetBtn: document.getElementById("resetBtn")
};

init();

function init() {
  setOptions(els.country, unique(customers.map((customer) => customer.country)));
  setOptions(els.region, unique(customers.map((customer) => customer.region)));
  setOptions(els.market, unique(customers.map((customer) => customer.market)));
  setOptions(els.product, unique(customers.map((customer) => customer.product)));
  renderTypeTabs();
  bindEvents();
  render();
  renderDetail();
}

function enrichLead([name, country, source], index) {
  const region = regionByCountry[country] || "其他地区";
  const product = inferProduct(name);
  const type = inferType(name);
  const intent = inferIntent(type, product);
  const score = scoreLead(country, product, type, index);

  const lead = {
    id: `lead-${index + 1}`,
    name,
    country,
    region,
    market: marketByRegion[region] || `${region}目标市场`,
    product,
    type,
    intent,
    score,
    source,
    ticker: tickerHints[name] || ""
  };
  lead.links = buildNetworkLinks(lead);
  return lead;
}

function buildNetworkLinks(customer) {
  const company = encodeURIComponent(customer.name);
  const country = encodeURIComponent(customer.country);
  const product = encodeURIComponent(customer.product);
  const ticker = encodeURIComponent(customer.ticker || customer.name);

  return {
    official: `https://www.google.com/search?q=${company}+official+website+contact`,
    linkedin: `https://www.linkedin.com/search/results/companies/?keywords=${company}`,
    finance: customer.ticker
      ? `https://finance.yahoo.com/quote/${ticker}`
      : `https://finance.yahoo.com/lookup?s=${company}`,
    reports: `https://www.annualreports.com/SearchResults?query=${company}`,
    sec: `https://www.sec.gov/edgar/search/#/q=${company}`,
    news: `https://www.google.com/search?tbm=nws&q=${company}+${country}+${product}`,
    import: `https://www.google.com/search?q=${country}+${product}+importer+distributor+buyer+email`,
    investor: `https://www.google.com/search?q=${company}+investor+relations+annual+report+financial+statements`,
    websiteContact: `https://www.google.com/search?q=${company}+contact+email+sales+${country}`
  };
}

function inferProduct(name) {
  const text = name.toLowerCase();
  if (text.includes("orthodont") || text.includes("aligner")) return "正畸与矫治";
  if (text.includes("dental") || text.includes("denta") || text.includes("oral") || text.includes("odonto")) return "牙科耗材与设备";
  if (text.includes("medical") || text.includes("healthcare") || text.includes("biomed") || text.includes("laborator")) return "医疗器械与耗材";
  if (text.includes("technology") || text.includes("sifary") || text.includes("zeiss") || text.includes("optik")) return "技术设备与软件";
  if (text.includes("trade") || text.includes("supply") || text.includes("asia pacific")) return "渠道贸易与分销";
  if (text.includes("education") || text.includes("tribune") || text.includes("2026")) return "展会教育与媒体";
  return "综合口腔医疗";
}

function inferType(name) {
  const text = name.toLowerCase();
  if (text.includes("association") || text.includes("tribune")) return "行业协会/媒体";
  if (text.includes("education") || text.includes("2026")) return "教育/展会";
  if (text.includes("trade") || text.includes("supply") || text.includes("service") || text.includes("enterprises")) return "经销/贸易商";
  if (text.includes("technology") || text.includes("system") || text.includes("software") || text.includes("solutions")) return "服务/技术";
  return "品牌/制造商";
}

function inferIntent(type, product) {
  if (type === "经销/贸易商") return "优先询问代理、库存和当地渠道";
  if (type === "行业协会/媒体") return "适合获取行业名单和展会曝光";
  if (type === "教育/展会") return "适合报名参展、查找参展商目录";
  if (type === "服务/技术") return "适合找技术合作、系统或设备方案";
  if (product === "正畸与矫治") return "适合正畸产品、耗材和方案合作";
  return "适合建立品牌供应或采购关系";
}

function scoreLead(country, product, type, index) {
  let score = 62 + ((index * 7) % 24);
  if (["United States of America", "Germany", "United Kingdom", "Singapore"].includes(country)) score += 8;
  if (["牙科耗材与设备", "医疗器械与耗材"].includes(product)) score += 5;
  if (type === "经销/贸易商") score += 4;
  return Math.min(score, 98);
}

function bindEvents() {
  els.keyword.addEventListener("input", () => {
    state.keyword = els.keyword.value.trim();
    render();
  });

  [
    [els.country, "country"],
    [els.region, "region"],
    [els.market, "market"],
    [els.product, "product"]
  ].forEach(([element, key]) => {
    element.addEventListener("change", () => {
      state[key] = element.value;
      render();
    });
  });

  els.favoritesOnly.addEventListener("change", () => {
    state.favoritesOnly = els.favoritesOnly.checked;
    render();
  });

  els.typeTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-type]");
    if (!button) return;
    state.type = button.dataset.type;
    renderTypeTabs();
    render();
  });

  document.querySelectorAll(".view-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      document.querySelectorAll(".view-button").forEach((item) => item.classList.toggle("active", item === button));
      render();
    });
  });

  els.results.addEventListener("click", (event) => {
    const action = event.target.closest("[data-action]");
    if (!action) return;
    const customer = customers.find((item) => item.id === action.dataset.id);
    if (!customer) return;

    if (action.dataset.action === "detail") selectCustomer(customer.id);
    if (action.dataset.action === "favorite") toggleFavorite(customer.id);
  });

  els.detailContent.addEventListener("click", (event) => {
    const copyButton = event.target.closest("[data-copy]");
    if (copyButton) copyText(copyButton.dataset.copy);
  });

  els.queryPills.addEventListener("click", (event) => {
    const copyButton = event.target.closest("[data-copy]");
    if (copyButton) copyText(copyButton.dataset.copy);
  });

  els.detailContent.addEventListener("input", persistDetailRecord);
  els.detailContent.addEventListener("change", persistDetailRecord);

  els.closeDetail.addEventListener("click", () => {
    state.selectedId = null;
    els.detailPanel.classList.remove("open");
    renderDetail();
  });

  els.exportBtn.addEventListener("click", () => exportCSV(getFilteredCustomers()));
  els.resetBtn.addEventListener("click", resetFilters);

}

function render() {
  const filtered = getFilteredCustomers();
  renderMetrics(filtered);
  renderQueryPills(filtered);
  renderActiveFilters(filtered);

  els.emptyState.hidden = filtered.length > 0;
  els.results.innerHTML = state.view === "table" ? renderTable(filtered) : filtered.map(renderCard).join("");
  els.results.className = state.view === "table" ? "table-wrap" : "results-grid";
}

function getFilteredCustomers() {
  const words = state.keyword.toLowerCase().split(/\s+/).filter(Boolean);
  return customers.filter((customer) => {
    const record = records[customer.id] || {};
    const haystack = [
      customer.name,
      customer.country,
      customer.region,
      customer.market,
      customer.product,
      customer.type,
      customer.intent,
      record.status,
      record.note
    ].join(" ").toLowerCase();

    return (
      words.every((word) => haystack.includes(word)) &&
      matchAll(state.country, customer.country) &&
      matchAll(state.region, customer.region) &&
      matchAll(state.market, customer.market) &&
      matchAll(state.product, customer.product) &&
      matchAll(state.type, customer.type) &&
      (!state.favoritesOnly || favorites.has(customer.id))
    );
  });
}

function renderMetrics(filtered) {
  els.resultCount.textContent = filtered.length;
  els.countryCount.textContent = unique(filtered.map((customer) => customer.country)).length;
  els.favoriteCount.textContent = favorites.size;
  els.networkCount.textContent = networkProviders.length;
}

function renderQueryPills(filtered) {
  const top = filtered[0] || customers[0];
  const country = state.country !== "全部" ? state.country : top.country;
  const product = state.product !== "全部" ? state.product : top.product;
  const market = state.market !== "全部" ? state.market : top.market;
  const queries = [
    `${country} ${product} distributor email`,
    `${market} importer ${product}`,
    `"${top.name}" contact email`,
    `site:linkedin.com/company ${country} ${product}`
  ];

  els.queryPills.innerHTML = queries.map((query) => `
    <button class="query-pill" type="button" data-copy="${escapeAttr(query)}" title="复制搜索词">
      <svg><use href="#icon-copy"></use></svg>
      <span>${escapeHTML(query)}</span>
    </button>
  `).join("");
}

function renderActiveFilters(filtered) {
  const active = [
    state.keyword && `关键词: ${state.keyword}`,
    state.country !== "全部" && `国家: ${state.country}`,
    state.region !== "全部" && `地区: ${state.region}`,
    state.market !== "全部" && `目的地: ${state.market}`,
    state.product !== "全部" && `产品: ${state.product}`,
    state.type !== "全部" && `类型: ${state.type}`,
    state.favoritesOnly && "只看收藏"
  ].filter(Boolean);

  els.resultSummary.textContent = `当前显示 ${filtered.length} 条客户线索`;
  els.activeFilters.textContent = active.length ? active.join(" / ") : "未启用筛选，展示全部第一版客户池";
}

function renderCard(customer) {
  const record = records[customer.id] || {};
  const isFavorite = favorites.has(customer.id);
  return `
    <article class="customer-card">
      <div class="card-head">
        <div>
          <h3>${escapeHTML(customer.name)}</h3>
          <div class="badge-row">
            <span class="badge brand">${escapeHTML(customer.country)}</span>
            <span class="badge">${escapeHTML(customer.region)}</span>
          </div>
        </div>
        <button class="icon-button favorite-button ${isFavorite ? "active" : ""}" type="button" title="收藏客户" data-action="favorite" data-id="${customer.id}">
          <svg><use href="#icon-star"></use></svg>
        </button>
      </div>

      <div class="badge-row">
        <span class="badge green">${escapeHTML(customer.product)}</span>
        <span class="badge gold">${escapeHTML(customer.type)}</span>
      </div>

      <div class="card-meta">
        <div class="meta-line"><span>外贸目的地</span><strong>${escapeHTML(customer.market)}</strong></div>
        <div class="meta-line"><span>匹配度</span><strong>${customer.score}%</strong></div>
        <div class="meta-line"><span>跟进状态</span><strong>${escapeHTML(record.status || "待开发")}</strong></div>
        <div class="meta-line"><span>联网入口</span><strong>${networkProviders.length} 个</strong></div>
      </div>

      <div class="card-actions">
        <button class="text-button primary" type="button" data-action="detail" data-id="${customer.id}">
          <svg><use href="#icon-eye"></use></svg>
          <span>详情</span>
        </button>
        <a class="text-button" href="${customer.links.official}" target="_blank" rel="noopener">
          <svg><use href="#icon-search"></use></svg>
          <span>联网查找</span>
        </a>
      </div>
    </article>
  `;
}

function renderTable(customersToRender) {
  const rows = customersToRender.map((customer) => {
    const record = records[customer.id] || {};
    return `
      <tr>
        <td><strong>${escapeHTML(customer.name)}</strong></td>
        <td>${escapeHTML(customer.country)}</td>
        <td>${escapeHTML(customer.region)}</td>
        <td>${escapeHTML(customer.market)}</td>
        <td>${escapeHTML(customer.product)}</td>
        <td>${escapeHTML(customer.type)}</td>
        <td>${customer.score}%</td>
        <td>${escapeHTML(record.status || "待开发")}</td>
        <td>
          <button class="text-button" type="button" data-action="detail" data-id="${customer.id}">
            <svg><use href="#icon-eye"></use></svg>
          </button>
        </td>
      </tr>
    `;
  }).join("");

  return `
    <table>
      <thead>
        <tr>
          <th>客户名称</th>
          <th>国家</th>
          <th>地区</th>
          <th>目的地</th>
          <th>产品方向</th>
          <th>客户类型</th>
          <th>匹配度</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderDetail() {
  const customer = customers.find((item) => item.id === state.selectedId);
  if (!customer) {
    els.detailContent.innerHTML = `
      <div class="detail-empty">
        <div class="detail-visual"></div>
        <div class="detail-empty-copy">
          <p class="eyebrow">Network Intelligence</p>
          <h3>选择一个客户查看网络情报</h3>
          <p>这里会显示官网搜索、股票行情、公司财报、新闻、LinkedIn 和进口商拓展入口。</p>
        </div>
      </div>
    `;
    return;
  }

  const record = records[customer.id] || {};
  const providerCards = networkProviders.map((provider) => {
    const href = customer.links[provider.key] || customer.links.official;
    return `
      <a class="network-card" href="${href}" target="_blank" rel="noopener">
        <strong>${provider.name}</strong>
        <span>${provider.hint}</span>
      </a>
    `;
  }).join("");

  const searchQueries = [
    `${customer.name} official website`,
    `${customer.name} email contact`,
    `${customer.name} investor relations annual report`,
    `${customer.name} stock ticker financial statements`,
    `${customer.country} ${customer.product} distributor`,
    `${customer.country} trade fair ${customer.product}`
  ];

  els.detailContent.innerHTML = `
    <div class="detail-title">
      <p class="eyebrow">Customer Profile</p>
      <h3>${escapeHTML(customer.name)}</h3>
      <div class="badge-row">
        <span class="badge brand">${escapeHTML(customer.country)}</span>
        <span class="badge">${escapeHTML(customer.region)}</span>
        <span class="badge green">${escapeHTML(customer.product)}</span>
        ${customer.ticker ? `<span class="badge gold">股票线索 ${escapeHTML(customer.ticker)}</span>` : ""}
      </div>
    </div>

    <section class="detail-section">
      <h4>客户判断</h4>
      <div class="detail-grid">
        <div><span>客户类型</span><strong>${escapeHTML(customer.type)}</strong></div>
        <div><span>外贸目的地</span><strong>${escapeHTML(customer.market)}</strong></div>
        <div><span>开发建议</span><strong>${escapeHTML(customer.intent)}</strong></div>
        <div><span>匹配度</span><strong>${customer.score}%</strong></div>
      </div>
    </section>

    <section class="detail-section">
      <h4>联网数据入口</h4>
      <div class="network-grid">${providerCards}</div>
      <p class="network-note">这些入口会打开外部实时网页，用于查官网、公司联系方式、新闻、股票和财报。后续接 API 后，可以把结果直接写回客户库。</p>
    </section>

    <section class="detail-section">
      <h4>股票与财报</h4>
      <div class="finance-panel">
        <strong>${customer.ticker ? `疑似上市代码：${escapeHTML(customer.ticker)}` : "未确认上市代码"}</strong>
        <span class="network-note">不是所有客户都是上市公司；私营公司通常需要通过官网、年报搜索、当地工商信息或新闻交叉验证。</span>
        <div class="link-row">
          <a class="text-button" href="${customer.links.finance}" target="_blank" rel="noopener">股票搜索</a>
          <a class="text-button" href="${customer.links.reports}" target="_blank" rel="noopener">年报搜索</a>
          <a class="text-button" href="${customer.links.sec}" target="_blank" rel="noopener">SEC/EDGAR</a>
          <a class="text-button" href="${customer.links.investor}" target="_blank" rel="noopener">投资者关系</a>
        </div>
      </div>
    </section>

    <section class="detail-section">
      <h4>跟进管理</h4>
      <label class="field">
        <span>状态</span>
        <select data-record-field="status" data-id="${customer.id}">
          ${["待开发", "已收藏", "已查官网", "已找到邮箱", "已发开发信", "暂不匹配"].map((status) => `
            <option value="${status}" ${status === (record.status || "待开发") ? "selected" : ""}>${status}</option>
          `).join("")}
        </select>
      </label>
      <label class="field">
        <span>备注</span>
        <textarea data-record-field="note" data-id="${customer.id}" placeholder="记录官网、联系人、邮箱、开发信反馈">${escapeHTML(record.note || "")}</textarea>
      </label>
    </section>

    <section class="detail-section">
      <h4>搜索词</h4>
      <div class="copy-list">
        ${searchQueries.map((query) => `
          <div class="copy-item">
            <code>${escapeHTML(query)}</code>
            <button class="icon-button" type="button" data-copy="${escapeAttr(query)}" title="复制搜索词">
              <svg><use href="#icon-copy"></use></svg>
            </button>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTypeTabs() {
  els.typeTabs.innerHTML = typeOptions.map((type) => `
    <button class="segment-button ${state.type === type ? "active" : ""}" type="button" data-type="${type}" role="tab" aria-selected="${state.type === type}">
      ${type}
    </button>
  `).join("");
}

function selectCustomer(id) {
  state.selectedId = id;
  els.detailPanel.classList.add("open");
  renderDetail();
}

function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  localStorage.setItem(storageKeys.favorites, JSON.stringify([...favorites]));
  render();
  if (state.selectedId === id) renderDetail();
}

function persistDetailRecord(event) {
  const field = event.target.dataset.recordField;
  const id = event.target.dataset.id;
  if (!field || !id) return;
  records[id] = { ...(records[id] || {}), [field]: event.target.value };
  localStorage.setItem(storageKeys.records, JSON.stringify(records));
  render();
}

function resetFilters() {
  state.keyword = "";
  state.country = "全部";
  state.region = "全部";
  state.market = "全部";
  state.product = "全部";
  state.type = "全部";
  state.favoritesOnly = false;
  els.keyword.value = "";
  els.country.value = "全部";
  els.region.value = "全部";
  els.market.value = "全部";
  els.product.value = "全部";
  els.favoritesOnly.checked = false;
  renderTypeTabs();
  render();
}

function setOptions(select, values) {
  select.innerHTML = ["全部", ...values].map((value) => `<option value="${escapeAttr(value)}">${escapeHTML(value)}</option>`).join("");
}

function matchAll(filterValue, actualValue) {
  return filterValue === "全部" || filterValue === actualValue;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function readJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function exportCSV(rows) {
  const header = ["客户名称", "国家", "地区", "外贸目的地", "产品方向", "客户类型", "匹配度", "官网搜索", "股票/财报入口", "状态", "备注"];
  const body = rows.map((customer) => {
    const record = records[customer.id] || {};
    return [
      customer.name,
      customer.country,
      customer.region,
      customer.market,
      customer.product,
      customer.type,
      `${customer.score}%`,
      customer.links.official,
      customer.links.investor,
      record.status || "待开发",
      record.note || ""
    ];
  });
  const csv = [header, ...body].map((row) => row.map(csvEscape).join(",")).join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `shuoyi-customers-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("搜索词已复制");
  } catch {
    const input = document.createElement("textarea");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
    showToast("搜索词已复制");
  }
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 1800);
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHTML(value);
}
