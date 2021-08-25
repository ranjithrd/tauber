import React from "react"
import clsx from "clsx"
import styles from "./HomepageFeatures.module.css"

const FeatureList = [
	{
		title: "Get started quickly",
		Svg: require("../../static/img/rocket.svg").default,
		description: (
			<>
				It takes exactly one minute to get started with Tauber. Add it
				as a dependency, add a script, and you're done.
			</>
		),
	},
	{
		title: "Extremely powerful",
		Svg: require("../../static/img/factory.svg").default,
		description: (
			<>
				Tauber allows you to run any script, JS code, JS file, and bash
				on any command, all in YAML.
			</>
		),
	},
	{
		title: "Add to any project",
		Svg: require("../../static/img/code.svg").default,
		description: (
			<>
				Tauber can be added to ANY JavaScript project in just a couple
				lines.
				{/* <code>npm i -g tauber</code>
				<code>echo "hello: echo world" &gt; cli.yaml</code>
	      <code>tauber hello</code> */}
			</>
		),
	},
]

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
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
	)
}
