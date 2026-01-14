---
title: "Software"
featured: true 
priority: 1
category: "Software"
projectType: "text"
image: "/assets/images/soft1.png"
year: "2024-2026"
description: "A turn-based monster battle engine implemented in Java."
---

## 1. Monster Competition 🎮
*A turn-based monster battle engine implemented in Java.*

### Project Overview
Players interact via the command line, using monsters and actions defined in an external configuration file to run “competitions”. Each monster has stats such as HP and speed. Actions can deal damage, heal, apply status conditions (e.g. poison, slow), or modify stats. The project includes a complete battle flow controller, random number system, and command handling layer, so new monsters and actions can be added by editing configuration files rather than changing core logic.

Details in GitHub: <a href='https://github.com/weiyudev/Monster-Competition' target='_blank'>View Repository ↗</a>

### Tech Stack
* **Language**: Java SE 17 
* **Tools**: Checkstyle, Git 
* **Concepts**: OOP, Regex, Game Loop, State Pattern

<hr class="divider-hr" />

## 2. Product Recommendation Engine 🗒️
*Console-based Java application (a recommendation system).*

### Project Overview
This project implements a graph-based product recommender. Products, categories, and their relationships (such as predecessors, successors, and siblings) are modeled as nodes and edges in a graph. A command-line interface lets users query this graph to obtain product recommendations according to different strategies. The system reads a structured database file, parses it into an internal graph representation, and then applies various recommendation strategies (e.g. union, intersection, predecessor/successor, siblings) to generate suitable suggestions. Robust parsing and validation components ensure that invalid input data or commands are reported clearly via custom exceptions.

### Tech Stack
* **Language**: Java SE 17 
* **Tools**: Checkstyle, Git

<hr class="divider-hr" />

## 3. Personal Website 👨🏻‍💻
*A minimalist, content-focused personal portfolio.*

### Project Overview
This website serves as my personal portfolio, designed with a strong focus on clarity, structure, and content. It showcases selected work across architecture, software, and games, along with professional experience and contact information.

Details in GitHub: <a href='https://github.com/weiyudev/weiyu.studio' target='_blank'>View Repository ↗</a>


### Tech Stack
* Javascript, HTML, CSS, Astro
