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

const publications = [
  {
    year: "2026",
    title:
      "Using a digital-based mindfulness curriculum to enhance healthy aging outcomes in community-dwelling older adults in Taiwan: mixed methods feasibility study.",
    venue: "JMIR Human Factors, 13, e8416.",
  },
  {
    year: "2025",
    title:
      "居家護理師對高齡者足部照護知識、態度及照護能力相關因素探討.",
    venue: "護理雜誌, 72(5), 58–68.",
    authors: "謝佩倫、呂郁芳、王俞蓉、陳靜敏",
  },
  {
    year: "2025",
    title: "人科蘊生的教學與服務學習―老醫館裡的新長照.",
    venue: "大學教學實務與研究學刊, 9(1), 41–64.（通訊作者）",
  },
  {
    year: "2023",
    title:
      "Relationship between physical activity and perceptions of ageing from the perspective of healthy ageing among older people with frailty with chronic disease.",
    venue: "BMC Nursing, 22:319.",
  },
  {
    year: "2023",
    title:
      "Development of the Healthy Aging Perspectives Questionnaire Among Older Adults with Chronic Disease in Taiwan.",
    venue: "Health & Social Care in the Community, 2023, 8238748.",
  },
  {
    year: "2021",
    title:
      "Validating a Brief Aging Perception Questionnaire for Older Persons with Chronic Disease in Taiwan.",
    venue: "Aging & Mental Health, 25(6), 1143–1150.",
  },
];

const projects = [
  "運用生成式 AI 提升實證護理課程之教學成效：從學習困境到精準輔助。",
  "多元正念課程結合數位科技輔助學習介入社區高齡者於健康老化之成效。",
  "運用虛擬實境結合體驗式學習提升症狀護理課程之學習成效。",
  "國中技藝教育札根計畫與社區衰弱慢性病老人健康老化研究。",
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
  "2025 年優良社區護理人員",
  "2023 年優良導師",
  "指導學生於護理臨床情境實務技能競賽獲獎",
  "多次獲實證護理與醫療品質競賽肯定",
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

      <section id="research" className="section-block research-section">
        <div className="research-visual" style={{ backgroundImage: `url(${researchImage})` }} aria-hidden="true" />
        <div className="research-content">
          <div className="section-heading">
            <span>Profile 04</span>
            <h2>研究成果與計畫主軸</h2>
            <p>
              研究成果聚焦健康老化觀點、慢性病高齡者、身體活動、老化感知、正念課程、數位介入與護理教育創新；下列為網站選摘之代表性期刊專論與研究方向。
            </p>
          </div>
          <div className="publication-list">
            {publications.map((pub) => (
              <article className="publication-item" key={`${pub.year}-${pub.title}`}>
                <span>{pub.year}</span>
                <div>
                  <h3>{pub.title}</h3>
                  {pub.authors && <p className="authors">{pub.authors}</p>}
                  <p>{pub.venue}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="project-strip">
            {projects.map((project) => (
              <p key={project}>{project}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="teaching" className="section-block teaching-section">
        <div className="section-heading narrow">
          <span>Profile 05</span>
          <h2>教學經歷與相關訓練的綜整呈現</h2>
          <p>
            依照需求，本網站不逐項列出所有授課與訓練紀錄，而是整合為三個具有延展性的教學服務面向，凸顯其長期投入與可合作主題。
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
          <h2>專業認證、榮譽與社會服務</h2>
        </div>
        <div className="honors-grid">
          <article className="ledger-card">
            <Brain size={26} />
            <h3>專業認證與審查角色</h3>
            <div className="tag-cloud">
              {credentials.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
          <article className="ledger-card">
            <Award size={26} />
            <h3>榮譽事蹟</h3>
            <div className="quiet-list">
              {honors.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>
          <article className="ledger-card wide-card">
            <Microscope size={26} />
            <h3>學術與公共服務</h3>
            <p>
              服務範圍涵蓋台灣社區衛生護理學會、嘉義長庚醫院護理顧問與助理研究員、BMC 系列期刊審查，以及考科藍臺灣研究中心中文翻譯志工，展現其對護理專業社群、研究品質與公共知識轉譯的持續投入。
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
