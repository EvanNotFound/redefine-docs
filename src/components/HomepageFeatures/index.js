import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use 简单易用',
    Svg: require('@site/static/img/rainbow.svg').default,
    description: (
      <>
        Redefine 主题非常简单易用。您可以使用它快速轻松地搭建自己的博客，配置毫不繁琐。
        Hexo theme redefine is easy to use. You can use it to build your own blog quickly and easily.
        Also, the configuration is simple and easy to understand.
      </>
    ),
  },
  {
    title: 'Focus on What Matters 专注内容',
    Svg: require('@site/static/img/moon.svg').default,
    description: (
      <>
        Redefine 主题让您专注于内容，我们将为您完成其他琐碎的工作。快去享受您的写作吧。
        Theme Redefine lets you focus on your content, and we&apos;ll do the chores. Go ahead and enjoy your writing.
      </>
    ),
  },
  {
    title: 'Update frequently 维护频繁',
    Svg: require('@site/static/img/volcano.svg').default,
    description: (
      <>
        Redefine 主题经常更新。您可以及时获得最新的功能和修复。欢迎提交 PR 和 issue。
        Theme Redefine updates frequently. You can get the latest features and bug fixes in time. Feel free to pull requests and send issues.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
