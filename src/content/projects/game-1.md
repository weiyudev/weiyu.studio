---
title: "Game"
featured: true
priority: 2
category: "Game"
projectType: "text"
image: "/assets/images/game1.jpg"
year: "2026"
description: "A narrative-driven decision-making game exploring moral pressure and emotional accessibility."
---
# Fahrkarten bitte!
<img
  src="/assets/images/game_pic/gamepic1.jpg"
  alt="Game screenshot"
  class="project-image"
/>


## Game Concept

**Fahrkarten bitte!** is a short-session, single-player decision-making game set inside a train carriage.  
The player takes the role of a ticket inspector and must inspect as many passengers as possible within a strict five-minute time window between stations. Each interaction presents moral dilemmas: passengers may lack valid tickets for understandable reasons, forcing the player to balance efficiency, empathy, and institutional rules under time pressure.

The game was developed as part of a university project on **emotional accessibility**, aiming to investigate how stress, ambiguity, and player choice can be scaled without relying on explicit violence or graphic content.

## Core Mechanics

Gameplay is structured around repeated **station-to-station loops**:
- Players select passengers directly in the carriage view.
- Each inspection opens a dialog-based interaction with multiple-choicechoice-driven responses.
- At any point, the player must decide whether to allow the passenger to stay or eject them from the train.
- All decisions contribute to a final summary that evaluates consistency, strictness, and alignment with company goals.

## Emotional Accessibility

A central design goal was to make emotionally stressful gameplay **adjustable**.  
Players can modify:
- Visual atmosphere (light vs. dark themes)
- Background audio intensity
- Difficulty and passenger density

These parameters directly influence emotional load without changing the core mechanics, allowing the game to function both as entertainment and as a research tool.

## Technical Implementation

- **Engine:** Unity (C#)
- **Architecture:** Model–View–Presenter (MVV)
- **Version Control:** GitLab

Gameplay sessions are logged automatically in structured XML files, enabling later analysis of player decisions and accessibility settings.

## Team & Context

This project was developed in a multidisciplinary team as part of a computer science course at Karlsruhe Institute of Technology (KIT), combining game design, software engineering, and human–computer interaction research.

## Source Code

[View the project on GitLab](https://gitlab.com/weiyudev/fahrkarten-bitte)
