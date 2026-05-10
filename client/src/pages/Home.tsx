import {
  Award,
  BookOpen,
  Brain,
  CalendarDays,
  GraduationCap,
  HeartPulse,
  Mail,
  Microscope,
  MonitorSmartphone,
  Sparkles,
  UsersRound,
} from "lucide-react";

/**
 * Design reminder: Humanistic Medical Editorialism.
 * This page should feel like a carefully edited academic profile: warm ivory paper,
 * pine green hierarchy, aged-gold annotation details, restrained motion, and
 * integrated research-care-teaching narrative rather than a conventional CV list.
 * Detailed academic records are presented as editorial ledgers for readability.
 */
const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663414221053/BmCPQuqMx2RaZ8YX6qfUEo/yu-rung-hero-editorial-9wpnpWxZWctb66UhJ6WmPU.webp";
const researchImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663414221053/BmCPQuqMx2RaZ8YX6qfUEo/yu-rung-research-cards-fG3SPf5xoCg5tp6S8YevCF.webp";
const careImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663414221053/BmCPQuqMx2RaZ8YX6qfUEo/yu-rung-care-community-Q9KpJKJ5sfnZyGpJH78JEa.webp";
const patternImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663414221053/BmCPQuqMx2RaZ8YX6qfUEo/yu-rung-timeline-pattern-RaPnkyxe78NeHXNSWE3J69.webp";

const navItems = [
  { href: "#profile", label: "專業概述" },
  { href: "#journey", label: "職涯路徑" },
  { href: "#research", label: "研究成果" },
  { href: "#teaching", label: "教學服務" },
  { href: "#honors", label: "榮譽服務" },
  { href: "#contact", label: "聯絡" },
];

const expertise = [
  {
    icon: HeartPulse,
    title: "長期照護與社區照護",
    text: "整合居家護理、日間照顧、出院準備與社區整體照顧經驗，關注高齡者在生活場域中的健康支持與照護連續性。",
  },
  {
    icon: UsersRound,
    title: "慢性病與健康老化",
    text: "以慢性病高齡者、衰弱、身體活動與老化感知為研究核心，探索促進健康老化的可行介入與評估工具。",
  },
  {
    icon: Sparkles,
    title: "正念減壓與身心調適",
    text: "將正念減壓應用於高齡健康、護理職場韌性與服務品質提升，重視覺察、壓力調適與照護者支持。",
  },
  {
    icon: BookOpen,
    title: "實證護理與臨床轉譯",
    text: "長期投入實證護理教學、文獻評讀、整合分析與臨床問題形成，協助護理人員將研究證據轉化為照護決策。",
  },
  {
    icon: MonitorSmartphone,
    title: "數位科技輔助教學",
    text: "運用 VR、生成式 AI、數位課程與體驗式學習設計，推動護理教育由學習困境走向精準輔助。",
  },
];

const timeline = [
  {
    period: "1998–2015",
    title: "臨床照護與實證能力養成",
    text: "從外科加護、呼吸照護中心、加護醫學部與心臟內科加護病房累積臨床照護經驗，並逐步投入實證護理、學生實習與護理研究發展。",
  },
  {
    period: "2015–2020",
    title: "護理管理與長照實務拓展",
    text: "於腸胃內科病房、居家護理所、日間照顧中心、居家服務中心與出院準備服務中擔任管理角色，深化急性醫療到社區長照的整合視野。",
  },
  {
    period: "2017",
    title: "UCSF 老人護理國際訪問經驗",
    text: "赴美國加州大學舊金山分校護理學院與 John A. Hartford Center of Gerontological Nursing Excellence 進修，強化老人護理與國際研究訓練。",
  },
  {
    period: "2021–迄今",
    title: "高等教育、研究主持與課程創新",
    text: "在護理高等教育場域中結合健康老化、正念介入、數位科技與實證護理，推動研究計畫、課程設計與護理人才培育。",
  },
];

const journalPublications = [
  {
    year: "2026",
    citation:
      "Wang, Y. R., Hsieh, P. L., Chang, C. C., Hsiao, C. C. & Hu, M. L. (2026). Using a digital-based mindfulness curriculum to enhance healthy aging outcomes in community-dwelling older adults in Taiwan: mixed methods feasibility study. JMIR Human Factors, 13, e8416.",
  },
  {
    year: "2025",
    citation:
      "謝佩倫、呂郁芳、王俞蓉、陳靜敏. (2025). 居家護理師對高齡者足部照護知識、態度及照護能力相關因素探討. 護理雜誌, 72(5), 58–68.",
  },
  {
    year: "2025",
    citation:
      "張嘉秀、王俞蓉（2025, In press）. 人科蘊生的教學與服務學習―老醫館裡的新長照. 大學教學實務與研究學刊, 9(1), 41–64.（通訊作者）",
  },
  {
    year: "2023",
    citation:
      "Wang, Y. R., Lee, H. F., Hsieh, P. L., Chang, C. C. & Chen, C. M. (2023). Relationship between physical activity and perceptions of ageing from the perspective of healthy ageing among older people with frailty with chronic disease: a cross-sectional study. BMC Nursing, 22:319.",
  },
  {
    year: "2023",
    citation:
      "Wang, Y. R., Lee, H. F., Hsieh, P. L., & Chen, C. M. (2023). Development of the Healthy Aging Perspectives Questionnaire Among Older Adults with Chronic Disease in Taiwan. Health & Social Care in the Community, 2023, 8238748.",
  },
  {
    year: "2023",
    citation:
      "Hsieh, P. L., Wang, Y. R., & Huang, T. C. (2023). Exploring Key Factors Influencing Nursing Students’ Cognitive Load and Willingness to Serve Older Adults: Cross-sectional Descriptive Correlational Study. JMIR Serious Games, 11, e43203.",
  },
  {
    year: "2021",
    citation:
      "Wang, Y. R., Lee, H. F., & Chen, C. M. (2021). Validating a Brief Aging Perception Questionnaire (B-APQ) for Older Persons with Chronic Disease in Taiwan. Aging & Mental Health, 25(6), 1143–1150. DOI: 10.1080/13607863.2020.1734914",
  },
  {
    year: "2021",
    citation:
      "岳芳如、徐韻婷、王俞蓉、辜漢章、許惟傑（2021）. 抗生素骨水泥降低全膝關節置換手術病人深部感染之成效. 台灣醫學, 25(5), 592–602.",
  },
  {
    year: "2018",
    citation:
      "Ku, H., Cho, C., Wang Y., Chen, L., Yueh, F., Tian, Y, Tsai, Y., Liao, W. (2018). A Prospective Randomized Controlled Trial of Efficacy of Gum Chewing on Gastrointestinal Recovery after Laparoscopic Colorectal Surgery. Journal of Society of Colon and Rectal Surgeons. DOI: 10.6312/SCRSTW.2018.29(1).10609",
  },
  {
    year: "2016",
    citation:
      "Lee, H., Kuo, C., Chien, T., & Wang, Y. (2016, Aug). A Meta-Analysis of the Effects of Coping Strategies on Reducing Nurse Burnout. Applied Nursing Research, 31, 100–110.",
  },
];

const bookChapters = [
  "王俞蓉（2024）. 社區式長期照顧服務. 於胡月娟總校閱，長期照顧（八版，191–218）. 新文京。",
  "王俞蓉（2021）. 呼吸系統功能障礙之護理—密閉式胸腔引流系統. 於陳敏麗總校閱，內外科護理技術（六版，208–221）. 新文京。",
];

const researchProjects = [
  {
    period: "2025/08/01–2026/07/31",
    source: "教育部教學實踐計畫",
    role: "計畫主持人",
    title:
      "運用生成式 AI 提升實證護理課程之教學成效：從學習困境到精準輔助",
    code: "MOE-114-TPRMN-1070-017Y1",
  },
  {
    period: "2024/05/01–2026/04/30",
    source: "國家科學及技術委員會",
    role: "計畫主持人",
    title:
      "多元正念課程結合數位科技輔助學習介入社區高齡者於健康老化之成效：隨機對照試驗研究",
    code: "113-2410-H-255-001-MY2",
  },
  {
    period: "2023/08/01–2024/07/31",
    source: "教育部教學實踐計畫",
    role: "計畫主持人",
    title:
      "運用虛擬實境結合體驗式學習提升症狀護理課程之學習成效—以新冠肺炎病人為例",
    code: "EZRPF3N0471",
  },
  {
    period: "2023/09/01–2024/08/31",
    source: "台塑企業暨王長庚公益信託",
    role: "計畫主持人",
    title: "國中技藝教育札根計畫—嘉義縣東榮國中醫護課程",
    code: "FCRPF6N0051",
  },
  {
    period: "2022/08/01–2023/07/31",
    source: "台塑企業暨王長庚公益信託",
    role: "計畫主持人",
    title: "國中技藝教育札根計畫—嘉義縣東榮國中醫護課程",
    code: "FCRPF6M0041",
  },
  {
    period: "2021/01–2021/12",
    source: "台灣護理學會",
    role: "計畫主持人",
    title: "社區衰弱慢性病老人之身體活動、老化感知對健康老化觀點的影響",
    code: "1101014",
  },
];

const teachingThemes = [
  {
    title: "正念減壓與護理職場韌性",
    text: "教學與工作坊服務對象涵蓋醫院、政府機關、學校與社福組織，主題聚焦壓力調適、覺察體驗、正念溝通與照護者自我增韌。",
  },
  {
    title: "實證護理與整合分析訓練",
    text: "長期帶領臨床問題形成、RevMan 與 GRADEpro 操作、系統性文獻回顧、RCT 文獻評讀與實證護理增能課程。",
  },
  {
    title: "高齡、失智與長照人才培育",
    text: "結合臨床照護、護理行政與社區長照訓練基礎，推動高齡友善、失智照護、身心障礙照顧服務與長照專業能力。",
  },
];

const credentials = [
  "正念減壓特派講師",
  "實證種子教師",
  "實證健康照護指導教師",
  "進階護理師",
  "實證健康照護知識館審查委員",
  "特殊需求者口腔照護指導員",
];

const honors = [
  { year: "2025", title: "優良社區護理人員", unit: "社區衛生護理學會" },
  { year: "2023", title: "優良導師", unit: "長庚科技大學" },
  {
    year: "2023",
    title:
      "指導學生參加南丁格爾大仁盃技專校院護理臨床情境實務技能競賽，於護理專業技能實境競賽團體競賽獲第二名與優勝，病例閱讀與醫護術語團體競賽獲優勝，護理專業知識能力大挑戰個人賽獲優勝",
    unit: "大仁科技大學",
  },
  { year: "2015", title: "提升照護品質全國實證競賽潛力獎", unit: "台灣實證護理學會" },
  { year: "2014", title: "第 15 屆醫療品質獎實證醫學臨床運用組潛力獎", unit: "醫療品質策進會" },
  { year: "2014", title: "績優護理人員", unit: "台南縣護理師護士公會" },
  { year: "2013", title: "提升照護品質全國實證競賽金獎", unit: "台灣實證護理學會" },
  { year: "2012", title: "實證護理競賽銅獎", unit: "台灣護理學會" },
  { year: "2010", title: "實證護理競賽潛力獎", unit: "台灣護理學會" },
  { year: "2001", title: "優良護理人員楷模", unit: "中山醫學大學附設醫院" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="主要導覽">
        <a className="brand-mark" href="#home" aria-label="回到首頁">
          <span>YR</span>
          <div>
            <strong>王俞蓉</strong>
            <small>Yu-Rung Wang</small>
          </div>
        </a>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section
        id="home"
        className="hero-section"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(250,246,235,.96), rgba(250,246,235,.78) 44%, rgba(250,246,235,.18)), url(${heroImage})` }}
      >
        <div className="hero-content reveal-block">
          <p className="eyebrow">Nursing · Healthy Aging · Mindfulness · Digital Learning</p>
          <h1>以研究、教學與照護實踐促進健康老化</h1>
          <p className="hero-lead">
            王俞蓉助理教授專業橫跨長期照護、慢性病照護、老人照護、正念減壓與數位科技輔助教學，將臨床經驗、社區實務與學術研究整合為具溫度的護理教育與健康老化行動。
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#research">
              閱讀研究成果
            </a>
            <a className="secondary-link" href="mailto:daisy025@gmail.com">
              <Mail size={18} /> 聯絡合作
            </a>
          </div>
        </div>
        <aside className="hero-card reveal-block delay-1" aria-label="個人摘要">
          <span className="folio">Profile 01</span>
          <h2>王俞蓉 Yu-Rung Wang</h2>
          <p>國立中山大學護理系 助理教授</p>
          <div className="mini-grid">
            <span>健康老化</span>
            <span>長期照護</span>
            <span>正念減壓</span>
            <span>數位教學</span>
          </div>
        </aside>
      </section>

      <section id="profile" className="section-block intro-grid">
        <div className="section-kicker">
          <span>Profile 02</span>
          <h2>從臨床、社區到學術的整合型護理專業</h2>
        </div>
        <div className="intro-copy">
          <p>
            王俞蓉助理教授的專業路徑並非單一學術履歷，而是一條由急重症臨床照護、護理行政、居家與社區長照，再延伸至高等教育與國際研究訓練的累積。她的工作聚焦於高齡與慢性病族群如何在社區中維持健康、尊嚴與生活品質，並透過正念與數位科技探索新的教育與介入形式。
          </p>
          <div className="education-note">
            <GraduationCap size={22} />
            <p>
              博士畢業於國立成功大學醫學院護理系國際博士班，並曾赴 UCSF 護理學院 John A. Hartford Center of Gerontological Nursing Excellence 擔任訪問學者，形塑老人護理與國際研究視野。
            </p>
          </div>
        </div>
      </section>

      <section className="expertise-panel" aria-label="專業焦點">
        {expertise.map((item, index) => {
          const Icon = item.icon;
          return (
            <article className="expertise-card reveal-block" key={item.title} style={{ animationDelay: `${index * 90}ms` }}>
              <Icon size={26} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </section>

      <section
        id="journey"
        className="section-block journey-section"
        style={{ backgroundImage: `linear-gradient(rgba(252,248,238,.94), rgba(252,248,238,.94)), url(${patternImage})` }}
      >
        <div className="section-heading narrow">
          <span>Profile 03</span>
          <h2>職涯路徑：照護現場、管理實務與教學研究的連續線</h2>
          <p>
            網站以階段式時間線綜整職涯脈絡，保留履歷的完整性，同時避免逐項堆疊職稱與單位，讓訪客能迅速理解專業演進。
          </p>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={item.period}>
              <time>{item.period}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="research" className="section-block research-section detailed-research">
        <div className="research-visual" style={{ backgroundImage: `url(${researchImage})` }} aria-hidden="true" />
        <div className="research-content">
          <div className="section-heading">
            <span>Profile 04</span>
            <h2>期刊發表、專書章節與研究計畫</h2>
            <p>
              依照需求，本區已從代表性成果改為詳細呈現。期刊發表以年份與完整引用資訊排列，研究計畫則呈現計畫名稱、經費來源、角色、執行期間與編號，方便學術履歷查閱。
            </p>
          </div>

          <div className="academic-ledger">
            <div className="ledger-heading">
              <h3>期刊專論發表</h3>
              <span>{journalPublications.length} 篇</span>
            </div>
            {journalPublications.map((pub) => (
              <article className="publication-item detailed" key={pub.citation}>
                <span>{pub.year}</span>
                <p>{pub.citation}</p>
              </article>
            ))}
          </div>

          <div className="academic-ledger compact-ledger">
            <div className="ledger-heading">
              <h3>專書章節</h3>
              <span>{bookChapters.length} 篇</span>
            </div>
            {bookChapters.map((chapter) => (
              <p className="chapter-item" key={chapter}>{chapter}</p>
            ))}
          </div>

          <div className="academic-ledger project-ledger">
            <div className="ledger-heading">
              <h3>研究計畫</h3>
              <span>{researchProjects.length} 件</span>
            </div>
            <div className="project-table" role="table" aria-label="研究計畫詳細清單">
              <div className="project-row project-head" role="row">
                <span role="columnheader">期間</span>
                <span role="columnheader">計畫名稱</span>
                <span role="columnheader">經費來源</span>
                <span role="columnheader">角色</span>
              </div>
              {researchProjects.map((project) => (
                <div className="project-row" role="row" key={`${project.period}-${project.code}`}>
                  <span role="cell">{project.period}</span>
                  <span role="cell">
                    <strong>{project.title}</strong>
                    <small>計畫編號：{project.code}</small>
                  </span>
                  <span role="cell">{project.source}</span>
                  <span role="cell">{project.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="teaching" className="section-block teaching-section">
        <div className="section-heading narrow">
          <span>Profile 05</span>
          <h2>教學經歷與相關訓練的綜整呈現</h2>
          <p>
            依照原先需求，本網站仍不逐項列出所有授課與訓練紀錄，而是整合為三個具有延展性的教學服務面向，凸顯其長期投入與可合作主題。
          </p>
        </div>
        <div className="teaching-layout">
          <img src={careImage} alt="社區護理、長照與正念教學的柔和插圖" />
          <div className="teaching-cards">
            {teachingThemes.map((theme) => (
              <article key={theme.title}>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="honors" className="section-block honors-section">
        <div className="section-heading">
          <span>Profile 06</span>
          <h2>專業認證、榮譽事蹟與社會服務</h2>
          <p>
            榮譽事蹟已改為詳細清單，保留年度、獲獎內容與頒發或競賽單位；專業認證與社會服務則作為支持其學術與公共貢獻的補充脈絡。
          </p>
        </div>
        <div className="honors-grid detailed-honors">
          <article className="ledger-card credential-card">
            <Brain size={26} />
            <h3>專業認證與審查角色</h3>
            <div className="tag-cloud">
              {credentials.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
          <article className="ledger-card wide-card honor-ledger-card">
            <Award size={26} />
            <h3>榮譽事蹟</h3>
            <div className="honor-list">
              {honors.map((honor) => (
                <article className="honor-item" key={`${honor.year}-${honor.title}`}>
                  <time>{honor.year}</time>
                  <div>
                    <h4>{honor.title}</h4>
                    <p>{honor.unit}</p>
                  </div>
                </article>
              ))}
            </div>
          </article>
          <article className="ledger-card wide-card">
            <Microscope size={26} />
            <h3>學術與公共服務</h3>
            <p>
              服務範圍涵蓋台灣社區衛生護理學會理事與秘書長、嘉義長庚醫院護理顧問與助理研究員、BMC Geriatric、BMC Nursing、BMC Public Health、BMC Medical Education、BMC Psychology、BMC Psychiatry 等期刊審查，以及考科藍臺灣研究中心中文翻譯志工，展現其對護理專業社群、研究品質與公共知識轉譯的持續投入。
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <span className="folio">Contact</span>
          <h2>研究、課程、演講與專業合作</h2>
          <p>
            若欲洽詢健康老化、長期照護、正念減壓、實證護理或數位科技輔助教學相關合作，可透過電子信箱聯繫。
          </p>
        </div>
        <a className="contact-mail" href="mailto:daisy025@gmail.com">
          <Mail size={20} /> daisy025@gmail.com
        </a>
      </section>

      <footer className="site-footer">
        <p>© 2026 Yu-Rung Wang. Academic portfolio website.</p>
        <p>
          <CalendarDays size={15} /> Updated with CV materials provided on 2026.05.10
        </p>
      </footer>
    </main>
  );
}
