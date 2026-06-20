# Angular
## New Angular Projects (>= v21)
- What you learn throughout the course will apply to Angular in general - no matter the version.

- But to follow along with exactly the same setup as shown over the next lectures, you should create new projects via ``` ng new first-angular-app --no-zoneless```

- In the next lecture, I just run ```ng new first-angular-app``` - but with Angular v21+, this will give you a project that is configured in a "zoneless" mode, a mode we'll    explore in detail a little later in the course. Therefore, to get started, I recommend creating projects with the ```--no-zoneless``` flag.

- 	[Angular CLI](https://angular.dev/tools/cli)

### Angular CLI Command Summary

| Command | Purpose | Short Description |
| --- | --- | --- |
| `ng version` *(or `ng v`)* | **Verify Installation** | Displays active Angular CLI, Node.js, and OS versions. |
| `npm list -g --depth 0` | **Check Global Packages** | Lists top-level global npm packages to locate installed binaries. |
| `npm install -g @angular/cli` | **Install Angular CLI** | Downloads and installs the Angular CLI globally on your system. |
| `ng new first-angular-app --no-zoneless` | **Create Course Project** | Scaffolds a new project with classic `Zone.js` change detection. |
