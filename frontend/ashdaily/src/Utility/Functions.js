import React from 'react';


export const makeListedItems = (text)=>(
	text.split("\n").map(line => (
		<li>{line}</li>
	))
)

export const makeListedItemsWithAnchorTags = (text) => (
	text.split("\n").map((line, index) => (
		<li><a href={line}>#{index+1}</a></li>
	)
))

export default {makeListedItems, makeListedItemsWithAnchorTags};


