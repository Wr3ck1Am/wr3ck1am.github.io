"use strict";
const zh = {
  viewSystemFigure:"查看原图",
  lensRab:"开放世界机器人自主性",rabRole:"共同项目负责人 · 共同第一作者",rabStatus:"arXiv 预印本 · 2026.10",rabSubtitle:"迈向开放世界的机器人自主性",
  rabBody:"共同负责家庭机器人自主性评测基准，覆盖明确指令下的操作到开放式自主服务。我的工作包括评测设计、任务构建、模型适配与实验，考核任务发现、上下文推理、操作、失败恢复和鲁棒性。",
  rabDimensions:"能力评测维度",rabPaperDetails:"论文详情",systemDetails:"系统详情",rabAtomic:"原子任务",rabTasks:"短程 + 长程任务",rabScenarios:"开放场景",
  rabDetails:"RobotAgentBench 研究从执行预定义任务到根据高层需求自主行动之间的差距。任务级评测分别考核五类能力，开放场景则检验智能体如何将这些能力整合起来。实验比较独立 VLA/WAM 策略与规划–执行–验证 Agent，并研究混合执行和递归自我改进。论文 Towards Open-world Robot Autonomy 于 2026 年 10 月发布为 arXiv 预印本（2610.34649）。",
  skip:"跳转到正文",navResearch:"研究",navExperience:"经历",navContact:"联系",heroCv:"简历",heroGreeting:"嗨，我是",heroLead:"让机器人，",heroLeadAccent:"走出预设的脚本。",
  introStart:"我在 ",introStudy:" 攻读硕士，同时在 ",introAdvisor:"Michael Yip 教授",introAether:" 担任研究实习生。此前曾与 ",introLab:" 在 ",introEnd:" 开展机器人学习研究（2026 年 1–5 月）。",
  introFocus:"我致力于构建和评测能够理解环境、围绕开放式目标行动，并从失败中恢复的机器人。研究涵盖 ",introRabWork:" 的自主能力评测、",introCrisWork:" 的因果规划与执行，以及 ",introCampWork:" 的操作行为记忆，希望让机器人在日常环境中更可靠地完成长程任务。",
  introPast:"本科毕业于 ",introTongji:"同济大学",introHirain:"，曾在 ",introHirainName:"经纬恒润",introCollab:" 从事动态感知。欢迎 ",introConnect:"交流想法、探讨合作。",availability:"寻求 2027 年起的机器人学习 / 具身智能研究与工程岗位",location:"美国加州 · 圣迭戈",portraitCaption:"UC San Diego · Aether AI",
  studioNote:"从情境，到行动。",lensBuild:"CRIS-0",lensBuildDetail:"因果 Agent · 智元 G1",lensRemember:"CAMP",lensRememberDetail:"行为记忆 · CoRL Workshop / TRA",
  researchEyebrow:"主要研究",researchHeading:"研究项目",researchNote:"从机器人的行为，到衡量能力的评测体系。",
  crisRole:"共同第一作者",crisStatus:"2026.10 公开发布",crisSubtitle:"因果驱动的机器人智能系统",crisBody:"通过因果 Agent 与世界模型实现机器人长程自主。我负责 Agent 侧的 Planner、Executor、统一工具接口与执行策略，集成因果世界动作模型策略，并部署至智元 G1。",crisKeyline:"因果任务状态 · 技能编排 · 失败恢复",researchBlog:"技术博客",
  crisDetails:"CRIS-0 将因果 Agent 与因果世界动作模型连接起来，在同一系统中衔接推理与物理行动。Agent 推理动作将如何改变环境，学习策略则在智元 G1 上完成实际交互。公开家庭演示围绕长程整理、桌布更换和新物体技能迁移，展示系统如何将高层需求落实为连续的机器人行为。",
  crisCoverage:"媒体报道与讨论",syncedMachine:"机器之心",qbitai:"量子位",sponsoredContent:"（品牌赞助）",
  crisMedia:"真实物体，变化的情境。",campMedia:"下一步，来自过去的记忆。",
  campRole:"共同第二作者 · UC San Diego ARCLab",campStatus:"已投稿 CoRL Workshop / TRA",campSubtitle:"面向部分可观测操作的行为记忆",campBody:"让机器人从自身的执行历史中学习。CAMP 通过历史动作重建学习紧凑的行为记忆，并接入 Diffusion Policy。我的贡献主要是 Memory-T-Bench / Memory-Manip-Bench 的示教与评测基础设施，以及基线实验。",campResult:"7 项三维任务平均成功率",projectWebsite:"项目主页",paperDetails:"论文信息",campDetails:"共同第二作者，导师为 Michael Yip 教授。已投稿 CoRL Workshop 和 TRA。搭建 Memory-T-Bench / Memory-Manip-Bench 的示教与评测设施，开展 ACT、Diffusion Policy、π0.5、MemoryVLA 基线实验。7 项三维任务平均成功率 64.3%，较最佳基线提升 23.4 个百分点；4 项 Franka Panda 真机任务中，3 项由全部基线 0/10 提升至 7/10，Probe-Insert 达 11/15。",
  lensWorldDetail:"视频到仿真 · 222 个实例",v2wRole:"参与作者 · Aether AI",v2wStatus:"arXiv 预印本 · 2026.10",v2wSubtitle:"从具身视频构建交互世界的 Coding Agent 评测",
  v2wBody:"评测 Coding Agent 将机器人与人类示教视频转化为可执行仿真的能力：重建场景与机器人行为，并通过执行反馈迭代修正。评估分别衡量几何保真度、动态保真度与功能正确性。",v2wInstances:"重建实例",v2wVideos:"源视频",v2wFamilies:"任务类别",v2wAgents:"Coding Agents",codeLink:"代码",
  backgroundEyebrow:"个人背景",backgroundHeading:"经历与教育",backgroundNote:"同济 → UC San Diego → Aether AI",experienceTitle:"研究与实习",educationTitle:"教育经历",aetherDates:"2026.04 — 至今",aetherRole:"研究实习生 · 具身智能与机器人学习",aetherBody:"负责 CRIS-0 的 Agent 规划、执行、工具接口与因果世界动作模型策略接入；共同负责 RobotAgentBench，并参与 Video2World 研究。",arcDates:"2026.01 — 2026.05",arcRole:"学生研究员 · 机器人学习",arcBody:"在 Michael Yip 教授指导下，于 Advanced Robotics and Controls Laboratory（ARCLab）开展研究。CAMP 共同第二作者；搭建 Memory-T-Bench / Memory-Manip-Bench 示教与评测基础设施，开展 ACT、Diffusion Policy、π0.5 与 MemoryVLA 基线实验。",hirainDates:"2025.07 — 2025.09",hirainName:"经纬恒润科技",hirainRole:"动态感知算法实习生",hirainBody:"相机 / 激光雷达 / 毫米波雷达自动标注、CLIP 数据筛选与 BEVFormer 感知。",ucsdDates:"2025.09 — 2026.12（预计）",ucsdDegree:"硕士 · 机器学习与数据科学",ucsdBody:"2026 年 1–5 月在 ARCLab 随 Michael Yip 教授开展机器人学习研究。",tongjiDates:"2021.09 — 2025.07",tongjiName:"同济大学",tongjiDegree:"工学学士",toolboxTitle:"常用工具",
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

// Fit the original blog diagram without changing its internal layout.
const systemFrame = document.getElementById("cris0-system-figure");
if (systemFrame) {
  const wrapper = systemFrame.parentElement;
  function fitSystemFigure() {
    const doc = systemFrame.contentDocument;
    const figure = doc && doc.querySelector("figure");
    if (!figure || !wrapper.clientWidth) return;
    const height = Math.ceil(figure.getBoundingClientRect().height);
    const scale = Math.min(1, wrapper.clientWidth / 1160);
    systemFrame.style.height = height + "px";
    systemFrame.style.transform = "scale(" + scale + ")";
    wrapper.style.height = Math.ceil(height * scale) + "px";
  }
  systemFrame.addEventListener("load", () => {
    fitSystemFigure();
    systemFrame.contentDocument.fonts.ready.then(fitSystemFigure);
  });
  new ResizeObserver(fitSystemFigure).observe(wrapper);
  systemFrame.closest("details").addEventListener("toggle", fitSystemFigure);
}
