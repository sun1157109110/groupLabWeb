import { faker } from '@faker-js/faker';
export enum Role {
  PROFESSOR = '教授',
  PHD = '博士',
  MASTER = '硕士',
  GRADUATE = '毕业生'
}
export type SiteConfig = typeof siteConfig
const siteConfig = {
  name: "Niu Group",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  navItems: [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "组内成员",
      href: "/members",
    },
    {
      label: "科研方向",
      href: "/research",
    },
    {
      label: "发表论文",
      href: "/publish",
    },
    {
      label: "团建活动",
      href: "/activity",
    }
  ],
  researchList: [
    {
      label: '研究方向一:二阶非线性光学高分子(电场极化调控分子聚集态结构)',
      href: '',
      imgSrc: '/researchList/researchItem1.jpeg'
    },
    {
      label: '研究方向二：力致发光(力刺激下的分子聚集态结构变化)',
      href: '/researchList/researchItem2',
      imgSrc: '/researchList/researchItem2.jpeg'
    },
    {
      label: '研究方向三：有机、高分子室温磷光(磷光信号对分子聚集态精细变化的灵敏响应)',
      href: '/researchList/researchItem3',
      imgSrc: '/researchList/researchItem3.jpeg'
    },
    {
      label: '研究方向四：光致形变(分子聚集态的光调控)',
      href: '/researchList/researchItem4',
      imgSrc: '/researchList/researchItem4.jpeg'
    },
    {
      label: '研究方向五：生物成像(聚集态结构优化及其应用探索)',
      href: '/researchList/researchItem5',
      imgSrc: '/researchList/researchItem5.jpeg'
    }
  ],
  news: [
    {
      label: '学术报告：XXX教授（华东理工大学）学术报告（2024年4月22日）',
      href: '',
      time: '2024-04-21',
      icon: 'lecture'
    },
    {
      label: '学术报告：XXX教授（XXX理工大学）学术报告（2024年4月29日）',
      href: '',
      time: '2024-04-29',
      icon: 'lecture'
    },
    {
      label: '热烈祝贺XXX的文章“Hole-transporting Materials with Rational Combination of Pyridine and Dibenzo[a,c]phenazine as Electron Acceptor for Dopant-free Perovskite Solar Cells”被Chinese Journal of Chemistry接收！',
      href: '',
      time: '2024-03-27',
      icon: 'paper'
    },
    {
      label: '欢迎报名‖《中国科学:化学》- XX大学“化学的创新与发展论坛',
      href: '',
      time: '2024-03-11',
      icon: 'news'
    },
    {
      label: '热烈祝贺XXX文章“Organic Persistent RTP Crystals: From Brittle to Flexible by Tunable Self-Partitioned Molecular Packing”被期刊Advanced Materials接收',
      href: '',
      time: '2024-2-11',
      icon: 'paper'
    },
    {
      label: '热烈祝贺XXX的文章“Hole-transporting Materials with Rational Combination of Pyridine and Dibenzo[a,c]phenazine as Electron Acceptor for Dopant-free Perovskite Solar Cells”被Chinese Journal of Chemistry接收！',
      href: '',
      time: '2024-03-27',
      icon: 'paper'
    },
    {
      label: '学术报告：XXX教授（华东理工大学）学术报告（2024年4月22日）',
      href: '',
      time: '2024-04-21',
      icon: 'lecture'
    },
    {
      label: '热烈祝贺XXX的文章“Hole-transporting Materials with Rational Combination of Pyridine and Dibenzo[a,c]phenazine as Electron Acceptor for Dopant-free Perovskite Solar Cells”被Chinese Journal of Chemistry接收！',
      href: '',
      time: '2024-03-27',
      icon: 'paper'
    },
    {
      label: '学术报告：XXX教授（华东理工大学）学术报告（2024年4月22日）',
      href: '',
      time: '2024-04-21',
      icon: 'lecture'
    },
  ],
  members: [{
    name: faker.person.fullName(),
    role: Role.PROFESSOR,
    href: `/member/${faker.person.fullName()}`,
    avatar: faker.image.avatar(),
    label: ''
  }],
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
const phds = Array(2).fill(0).map(() => ({
  name: faker.person.fullName(),
  role: Role.PHD,
  href: `/member/${faker.person.fullName()}`,
  avatar: faker.image.avatar(),
  label: ''
}))
const fakerMembers = (role:Role, num: number) => {
  return Array(num).fill(0).map(() => ({
    name: faker.person.fullName(),
    role: role,
    href: `/member/${faker.person.fullName()}`,
    avatar: faker.image.avatar(),
    label: ''
  }));
}
siteConfig.members.push(...fakerMembers(Role.PHD,2),...fakerMembers(Role.MASTER,6))
export { siteConfig }