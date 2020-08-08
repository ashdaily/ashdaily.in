import React from 'react';

import { Container, Image, Row, Col } from "react-bootstrap";

import ash from "../Images/ash.png";
import {makeListedItemsWithAnchorTags, makeListedItems} from "../Utility/Functions";


let publishedProjects = `https://tamakoshiapp.com/ios.downloads
https://tamakoshiapp.com/android.downloads
https://play.google.com/store/apps/details?id=com.stargroup.app&hl=en
https://apps.apple.com/jp/app/%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97%E5%85%AC%E5%BC%8F/id1446704954
http://upkonnect.jp`;

let cert = `https://www.hackerrank.com/certificates/962998e41b56
https://www.hackerrank.com/certificates/7185a32dd6f0
https://www.hackerrank.com/certificates/cae43c79f170`;

let technicalBackground = `Bachelor's degree in technology.
5 years of experience in full stack engineering, customer consulting and project management.
Proficient in developing applications in a solution consulting environment.
Proficient in writing clean and understandable code covered with good test coverage.
Ability to deliver projects under a high pressure consulting environment with tight deadlines. 
Ability to become specialist in new technologies in a short time frame.
Main Stack: Graphql, REST API, Python, Javascript, Bootstrap, ReactJS, Django, Docker.
AWS: EC2, Lambda, CloudFormation, Lambda, Route 53, RDS, Cloudwatch.
Familiar with: Serverless, PHP, Java, Kotlin, Swift, React Native, jQuery, Android Studio, Xcode, ExpressJs.
DB : Sqlite, Postgresql, DynamoDB, MySQL
QA and Debug: Python Debugger, Jest, JMeter, Postman, Selenium
Version Control Systems: Git
IDE: VS code, Pycharm
QA/Productivity Tools: Jira, Confluence, Sentry, Redmine, Slack`;

export default () => {
	technicalBackground = makeListedItems(technicalBackground)
	cert = makeListedItemsWithAnchorTags(cert)
	publishedProjects = makeListedItemsWithAnchorTags(publishedProjects)

	return (
		<Container className="mt-5 py-5" id="home">
			<Row>
				<Col lg={{ span: 10, offset: 1 }}>
					<Image id="ash-image" src={ash} roundedCircle className="border border-primary" />
					<h5 className="mt-4">BIO</h5>
					<p>Ashish Singh Vardhan</p>
					<p>Age: 26, Software Engineer, Tokyo</p>
					<p><a href="github.com/ashdaily">github.com/ashdaily</a></p>

					<h5 className="mt-4">Specialization</h5>
					<p>Full stack engineering Web, Mobile, Desktop Applications</p>

					<h5 className="mt-4">Certifications</h5>
					<p>
						{cert}
					</p>

					<h5 className="mt-4">Apps published</h5>
					<p>
						{publishedProjects}
					</p>
					<h5 className="mt-4">Technical Background</h5>
					<p>{technicalBackground}</p>
				</Col>
			</Row>
		</Container>
	)
}