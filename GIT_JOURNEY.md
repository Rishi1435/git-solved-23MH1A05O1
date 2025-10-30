# My Git Mastery Challenge Journey

## Student Information

- Name: P.Vishnu Venkata Rishi
- Student ID: 23MH1A05O1
- Repository: https://github.com/Rishi1435/git-solved-23MH1A05O1
- Date Started: October 26, 2025
- Date Completed: October 27, 2025


---

## Task Summary

Cloned instructor's repository with pre-built conflicts, created my own solution repository, and resolved all merge conflicts across multiple branches using comprehensive Git workflows. Practiced and documented all critical Git commands as required, ensuring complete version control mastery and project reliability.

---

## Commands Used

| Command         | Times Used | Purpose                                        |
|-----------------|:----------:|----------------------------------------------- |
| git clone       |     1      | Cloned instructor’s base repository            |
| git checkout    |    10+     | Switched between branches during merges/tests  |
| git branch      |    10+     | Viewed, created, and managed branches          |
| git merge       |     2      | Merged dev and conflict-simulator into main    |
| git add         |    20+     | Staged resolved conflicts and new files        |
| git commit      |    15+     | Saved progress, completed merges               |
| git push        |    12+     | Pushed changes to my repository                |
| git fetch       |     2      | Fetched updates from instructor                |
| git pull        |     3+     | Pulled changes from instructor                 |
| git stash       |     2      | Saved work-in-progress during branch switches  |
| git cherry-pick |     3+     | Transferred specific commits to main branch    |
| git rebase      |     1      | Rebased feature branches for clean history     |
| git reset       |     3      | Undid/tested various commit reverts/reset      |
| git revert      |     1      | Safely undid one pushed commit                 |
| git tag         |     2      | Marked release milestones and merge completions|
| git status      |    20+     | Verified everything before and during merges   |
| git log         |    10+     | Viewed history and commit graph                |
| git diff        |    5+      | Compared changes between branches              |

---

## Conflicts Resolved

### Merge 1: main + dev (Oct 27, 2025)

**1. config/app-config.yaml**  
- Issue: Production used port 8080, development used 3000  
- Resolution: Created unified config with environment-based settings  
- Strategy: Keep production as default, add development as optional  
- Difficulty: Medium  
- Time: 15 minutes  

**2. config/database-config.json**  
- Issue: Different database hosts and SSL settings  
- Resolution: Combined into one JSON with separate production and development profiles  
- Strategy: Support both environments dynamically  
- Difficulty: Medium  
- Time: 10 minutes  

**3. scripts/deploy.sh**  
- Issue: Different deployment strategies (production vs docker-compose)  
- Resolution: Added conditional logic using DEPLOY_ENV variable  
- Strategy: Unified both environments into one dynamic script  
- Difficulty: Hard  
- Time: 20 minutes  

**4. scripts/monitor.js**  
- Issue: Different monitoring intervals and log formats  
- Resolution: Added environment-based config object using process.env.NODE_ENV  
- Strategy: Unified and cleaned unnecessary logs  
- Difficulty: Medium  
- Time: 15 minutes  

**5. docs/architecture.md**  
- Issue: Different architectural documentation  
- Resolution: Merged both into a comprehensive structure with sections for production and development  
- Strategy: Combined both perspectives clearly  
- Difficulty: Easy  
- Time: 10 minutes  

**6. README.md**  
- Issue: Conflicting project descriptions and versioning  
- Resolution: Combined all features with clear environment sections  
- Strategy: Organized Production, Development, and Experimental separately  
- Difficulty: Easy  
- Time: 10 minutes  

---

### Merge 2: main + conflict-simulator (Oct 28, 2025)

**1. config/app-config.yaml**  
- Issue: Added new AI-related environment section  
- Resolution: Merged existing structure with new ai-testing environment  
- Strategy: Ensure backward compatibility  
- Difficulty: Medium  
- Time: 10 minutes  

**2. config/database-config.json**  
- Issue: Conflict between standard and experimental DB settings  
- Resolution: Added separate key for "ai_mode": true when testing  
- Strategy: Maintain structured profiles for all environments  
- Difficulty: Medium  
- Time: 10 minutes  

**3. scripts/deploy.sh**  
- Issue: Conflict between standard deployment and AI-enhanced setup  
- Resolution: Introduced flag --ai for experimental builds  
- Strategy: Extended the unified script from previous merge  
- Difficulty: Hard  
- Time: 20 minutes  

**4. scripts/monitor.js**  
- Issue: Additional AI-monitoring logic from simulator branch  
- Resolution: Integrated AI-based performance metrics under condition check  
- Strategy: Keep environment and AI logic modular  
- Difficulty: Medium  
- Time: 15 minutes  

**5. docs/architecture.md**  
- Issue: Simulator branch added AI workflow section  
- Resolution: Appended as a separate subsection under Future Enhancements  
- Strategy: Preserve chronological documentation clarity  
- Difficulty: Easy  
- Time: 10 minutes  

**6. README.md**  
- Issue: Overlapping sections from experimental build  
- Resolution: Merged AI features under a new Experimental Mode heading  
- Strategy: Keep readability and feature categorization  
- Difficulty: Easy  
- Time: 10 minutes  

---

## Most Challenging Parts

1. **Understanding Conflict Markers:** Learned to distinguish between HEAD and incoming branch, read each section, and choose or merge code carefully.
2. **Deciding Resolution Strategy:** Comprehended both production and development needs, added experimental features only in isolated/testable sections.
3. **Using Advanced Commands:** Practiced stash, cherry-pick, rebase, reset, revert, and tag in meaningful project scenarios for the first time.
4. **Testing Final Project:** Verified all merges by running code and reviewing documentation. Ensured correctness via tests and sample deployments.

---

## Key Learnings

### Technical
- Mastered manual conflict resolution across multiple files and environments.
- Learned to use advanced git commands in realistic development and teamwork workflows.
- Understood importance of changelog and detailed documentation for reviewers and collaborators.

### Best Practices
- Always read both sides of every conflict before resolving.
- Commit and push atomically and frequently.
- Use git status, log, and reflog regularly to check project health and history.
- Document major commands and decisions carefully.

---

## Reflection

This challenge taught me the value of careful version control management, thorough conflict resolution, and the patience needed for big merges. I’m now confident in using all major git commands, documenting my decision-making, and working with advanced workflows in real-world team projects.

