import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '跨境干货',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        跨境电商、独立站、技术和AI工具的实战经验和教程。
      </>
    ),
  },
  {
    title: '注重实战',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        我们提供可操作的指南和案例研究，帮助您解决实际问题，而不是空谈理论。
      </>
    ),
  },
  {
    title: '技术驱动',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        网站基于 Docusaurus 构建，利用 React 的强大功能提供流畅的阅读体验。
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
        <Heading as="h3">{title}</Heading>
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
