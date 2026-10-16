"use strict";
const zh = {
  skip:"跳转到正文",navResearch:"研究",navExperience:"经历",navContact:"联系",heroCv:"简历",heroEyebrow:"机器人学习 · 具身智能体",heroLead:"让机器人，",heroLeadAccent:"走出预设的脚本。",
  intro:"我目前在 UC San Diego（UCSD）攻读机器学习与数据科学硕士，并在 Aether AI 担任研究实习生。在 UCSD，我与 Michael Yip 教授开展机器人学习研究。",
  introFocus:"我的研究聚焦长程与开放式机器人自主，关注因果推理、行为记忆和世界模型：机器人如何理解情境、自主发现有用的任务、组合技能，并在日常环境中从失败中恢复。",introResearch:"研究经历涵盖 CRIS-0 中因果 Agent 的规划与执行、CAMP 中面向部分可观测操作的行为记忆，以及机器人学习的评测基础设施。我喜欢构建完整系统，并在真实机器人上检验其行为。",introBackground:"本科毕业于同济大学，曾在经纬恒润从事动态感知。欢迎就机器人学习与具身 Agent 交流想法、探讨研究合作。",availability:"寻求 2027 年起的机器人学习 / 具身智能研究与工程岗位",location:"美国加州 · 圣迭戈",portraitCaption:"UC San Diego · Aether AI",
  studioNote:"从情境，到行动。",lensBuild:"CRIS-0",lensBuildDetail:"因果 Agent · 智元 G1",lensRemember:"CAMP",lensRememberDetail:"行为记忆 · CoRL Workshop / TRA",
  researchEyebrow:"主要研究",researchHeading:"研究项目",researchNote:"从机器人的行为，到衡量能力的评测体系。",
  crisRole:"共同第一作者",crisStatus:"2026.10 公开发布",crisSubtitle:"因果驱动的机器人智能系统",crisBody:"通过因果 Agent 与世界模型实现机器人长程自主。我负责 Agent 侧的 Planner、Executor、统一工具接口与执行策略，集成因果世界动作模型策略，并部署至智元 G1。",crisKeyline:"因果任务状态 · 技能编排 · 失败恢复",researchBlog:"技术博客",myContribution:"我的贡献",
  crisDetails:"以显式因果状态构建可验证的阶段转换，支持重试、回退与重规划。从少量示教生成阶段、验证条件与工具，协调规则运动、学习策略、导航与 Verifier；公开真机演示涵盖长程整理、桌布更换，以及新物体上的技能迁移。",
  crisMedia:"真实物体，变化的情境。",campMedia:"下一步，来自过去的记忆。",
  campRole:"共同第二作者 · UC San Diego",campStatus:"已投稿 CoRL Workshop / TRA",campSubtitle:"面向部分可观测操作的行为记忆",campBody:"让机器人从自身的执行历史中学习。CAMP 通过历史动作重建学习紧凑的行为记忆，并接入 Diffusion Policy。我的贡献主要是 Memory-T-Bench / Memory-Manip-Bench 的示教与评测基础设施，以及基线实验。",campResult:"7 项三维任务平均成功率",projectWebsite:"项目主页",paperDetails:"论文信息",campDetails:"共同第二作者，导师 Michael Yip。已投稿 CoRL Workshop 和 TRA。研究覆盖依赖记忆的二维与视觉三维操作，以及 4 项 Franka Panda 真机任务。",
  lensWorldDetail:"视频到仿真 · 222 个实例",v2wRole:"参与作者 · Aether AI",v2wStatus:"arXiv 预印本 · 2026.10",v2wSubtitle:"从具身视频构建交互世界的 Coding Agent 评测",
  v2wBody:"评测 Coding Agent 将机器人与人类示教视频转化为可执行仿真的能力：重建场景与机器人行为，并通过执行反馈迭代修正。评估分别衡量几何保真度、动态保真度与功能正确性。",v2wInstances:"重建实例",v2wVideos:"源视频",v2wFamilies:"任务类别",v2wAgents:"Coding Agents",codeLink:"代码",
  backgroundEyebrow:"个人背景",backgroundHeading:"经历与教育",backgroundNote:"同济 → UC San Diego → Aether AI",experienceTitle:"研究与实习",educationTitle:"教育经历",aetherDates:"2026.04 — 至今",aetherRole:"研究实习生 · 具身智能与机器人学习",aetherBody:"因果 Agent、长程自主、策略接入与机器人 Agent 的评测。",hirainDates:"2025.07 — 2025.09",hirainName:"经纬恒润科技",hirainRole:"动态感知算法实习生",hirainBody:"相机 / 激光雷达 / 毫米波雷达自动标注、CLIP 数据筛选与 BEVFormer 感知。",ucsdDates:"2025.09 — 2026.12（预计）",ucsdDegree:"硕士 · 机器学习与数据科学",ucsdBody:"在 Michael Yip 教授指导下开展机器人学习研究。",tongjiDates:"2021.09 — 2025.07",tongjiName:"同济大学",tongjiDegree:"工学学士",toolboxTitle:"常用工具",
  contactEyebrow:"保持联系",contactHeading:"联系",contactHeadingAccent:"与简历",contactBody:"期待 2027 年起在机器人学习、具身 Agent 与评测领域的研究或工程机会。",cvLabel:"个人简历",cvAvailability:"请通过邮件索取",footer:"在情境中，理解机器人学习。",backToTop:"返回顶部 ↑"
};
const nodes = [...document.querySelectorAll("[data-i18n]")];
const en = Object.fromEntries(nodes.map(node => [node.dataset.i18n, node.textContent]));
const toggle = document.getElementById("language-toggle");
function setLanguage(language) {
  const chinese = language === "zh";
  const dictionary = chinese ? zh : en;
  document.documentElement.lang = chinese ? "zh-CN" : "en";
  nodes.forEach(node => { const value = dictionary[node.dataset.i18n]; if (value !== undefined) node.textContent = value; });
  toggle.innerHTML = chinese ? 'EN <span aria-hidden="true">↗</span>' : '中文 <span aria-hidden="true">↗</span>';
  toggle.setAttribute("aria-label", chinese ? "Switch to English" : "切换为中文");
  document.title = chinese ? "曹景琳 | 机器人学习与具身 Agent" : "Jinglin Cao | Robot Learning & Embodied Agents";
  try { localStorage.setItem("portfolio-language", chinese ? "zh" : "en"); } catch (_) {}
}
toggle.addEventListener("click", () => setLanguage(document.documentElement.lang === "en" ? "zh" : "en"));
try { if (localStorage.getItem("portfolio-language") === "zh") setLanguage("zh"); } catch (_) {}
