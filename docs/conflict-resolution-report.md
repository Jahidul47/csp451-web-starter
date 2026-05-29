# Conflict Resolution Report

## 1) Conflict Scenario

The merge conflict happened in README.md. The conflict involved the feature/user-authentication branch and the feature/api-endpoints branch. The authentication branch changed the Quick Start heading to "Quick Start (Auth Branch Notes)". The API branch changed the same heading to "Quick Start (API Branch Notes)". Because both branches edited the same line in different ways, Git could not automatically decide which version to keep.

## 2) What You Saw

When I merged the latest main branch into the API branch, Git showed conflict markers in README.md. The file contained the markers <<<<<<< HEAD, =======, and >>>>>>> origin/main. The top part showed the API branch version, and the lower part showed the incoming version from main. I took a screenshot before resolving the conflict so the conflict markers were clearly visible.

## 3) Resolution Strategy

I resolved the conflict by keeping both meanings instead of choosing only one branch. I changed the heading to "Quick Start (Auth + API Branch Notes)" because both the authentication and API changes were part of the final project. I deleted all conflict marker lines after deciding the final text. Then I saved README.md, staged the file, and committed the resolution with a clear merge conflict message.

After resolving the conflict, I verified the project by running npm test, npm run lint, and npm run format:check. All checks passed, so I knew the project was still working correctly.

## 4) Prevention Methods

In the future, I would reduce conflicts by keeping pull requests smaller and merging them more often. I would also communicate before editing the same section of a shared file like README.md. Another prevention method is to pull or rebase from main frequently so each branch stays updated. Finally, I would avoid large unrelated edits in the same file because they make conflicts more likely.
