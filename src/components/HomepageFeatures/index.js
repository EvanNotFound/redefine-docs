import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/rainbow.svg').default,
    description: (
      <>
        Hexo theme redefine is easy to use. You can use it to build your own blog quickly and easily.
        Also, the configuration is simple and easy to understand.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/moon.svg').default,
    description: (
      <>
        Theme Redefine lets you focus on your content, and we&apos;ll do the chores. Go ahead and enjoy your writing.
      </>
    ),
  },
  {
    title: 'Update frequently',
    Svg: require('@site/static/img/volcano.svg').default,
    description: (
      <>
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
