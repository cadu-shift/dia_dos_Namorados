---

description: "Task list template for feature implementation"
---

# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Features with date, audio, gallery, state, or deploy logic MUST include minimum tests for pure functions and orchestrating React components. Bug fixes MUST include regression tests that fail before implementation and pass after. Add presentational component tests when render rules, accessibility, or event callbacks can regress.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **React feature components**: `src/features/<feature>/components/`
- **React feature data/content**: `src/features/<feature>/data/`
- **React feature hooks**: `src/features/<feature>/hooks/`
- **Pure utilities**: `src/features/<feature>/utils/`
- **Bundled assets**: `src/assets/`
- **Public runtime assets**: `public/assets/`
- Tests live beside React files as `*.test.ts` or `*.test.tsx` unless the plan records another
  existing project convention.

<!--
  ============================================================================
  IMPORTANT: The tasks below are SAMPLE TASKS for illustration purposes only.

  The /speckit-tasks command MUST replace these with actual tasks based on:
  - User stories from spec.md (with their priorities P1, P2, P3...)
  - Feature requirements from plan.md
  - Entities from data-model.md
  - Endpoints from contracts/

  Tasks MUST be organized by user story so each story can be:
  - Implemented independently
  - Tested independently
  - Delivered as an MVP increment

  DO NOT keep these sample tasks in the generated tasks.md file.
  ============================================================================
-->

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure per implementation plan
- [ ] T002 Confirm React + Vite dependencies and existing test runner
- [ ] T003 [P] Configure linting and formatting tools

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Examples of foundational tasks (adjust based on your project):

- [ ] T004 Define local content/configuration in `src/features/<feature>/data/`
- [ ] T005 [P] Create pure utility boundaries in `src/features/<feature>/utils/`
- [ ] T006 [P] Define explicit loading/error/success state shape for React containers/hooks
- [ ] T007 Establish accessible textual loading and error message patterns
- [ ] T008 Confirm assets are placed in `public/assets` or `src/assets` per Vite path needs
- [ ] T009 Confirm headless test, build, run, and GitHub Pages validation commands

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - [Title] (Priority: P1) 🎯 MVP

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 1

> **NOTE: Required for data logic and bug fixes. Write regression tests FIRST and ensure they FAIL before implementation.**

- [ ] T010 [P] [US1] Pure utility test for [calculation/formatting] in `src/features/<feature>/utils/[utility].test.ts`
- [ ] T011 [P] [US1] Container/component test for [state/orchestration] in `src/features/<feature>/components/[Component].test.tsx`
- [ ] T012 [P] [US1] Presentational component test for [render/accessibility/event] in `src/features/<feature>/components/[Component].test.tsx` if render or event behavior can regress

### Implementation for User Story 1

- [ ] T013 [P] [US1] Create local content/config in `src/features/<feature>/data/[content].ts`
- [ ] T014 [US1] Implement pure utility in `src/features/<feature>/utils/[utility].ts` (depends on T013 if needed)
- [ ] T015 [US1] Implement React container/component in `src/features/<feature>/components/[Component].tsx`
- [ ] T016 [US1] Implement component styles in `src/features/<feature>/components/[Component].css`
- [ ] T017 [US1] Implement presentational component in `src/features/<feature>/components/[Component].tsx`
- [ ] T018 [US1] Implement presentational styles in `src/features/<feature>/components/[Component].css`
- [ ] T019 [US1] Add textual loading, actionable error, success state, focus, and keyboard behavior

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - [Title] (Priority: P2)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 2

- [ ] T020 [P] [US2] Pure utility/data test for [data behavior] in `src/features/<feature>/utils/[utility].test.ts`
- [ ] T021 [P] [US2] React component test for [state/orchestration] in `src/features/<feature>/components/[Component].test.tsx`

### Implementation for User Story 2

- [ ] T022 [P] [US2] Create or update local content in `src/features/<feature>/data/[content].ts`
- [ ] T023 [US2] Implement utility/hook changes in `src/features/<feature>/utils/[utility].ts` or `src/features/<feature>/hooks/use[Behavior].ts`
- [ ] T024 [US2] Implement container/component changes in `src/features/<feature>/components/[Component].tsx`
- [ ] T025 [US2] Implement UI style changes in `src/features/<feature>/components/[Component].css`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - [Title] (Priority: P3)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 3

- [ ] T026 [P] [US3] Pure utility/data test for [data behavior] in `src/features/<feature>/utils/[utility].test.ts`
- [ ] T027 [P] [US3] React component test for [state/orchestration] in `src/features/<feature>/components/[Component].test.tsx`

### Implementation for User Story 3

- [ ] T028 [P] [US3] Create or update local content in `src/features/<feature>/data/[content].ts`
- [ ] T029 [US3] Implement utility/hook changes in `src/features/<feature>/utils/[utility].ts` or `src/features/<feature>/hooks/use[Behavior].ts`
- [ ] T030 [US3] Implement container/component changes in `src/features/<feature>/components/[Component].tsx`
- [ ] T031 [US3] Implement UI style changes in `src/features/<feature>/components/[Component].css`

**Checkpoint**: All user stories should now be independently functional

---

[Add more user story phases as needed, following the same pattern]

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] TXXX [P] Documentation updates in docs/
- [ ] TXXX Code cleanup and refactoring
- [ ] TXXX Performance optimization across all stories
- [ ] TXXX [P] Additional React component and utility tests where risk remains
- [ ] TXXX Accessibility pass for text, contrast, focus, and keyboard operation
- [ ] TXXX Confirm global fonts/styles are centralized and assets are in `public/assets` or `src/assets`
- [ ] TXXX Validate Vite base path and GitHub Pages refresh behavior
- [ ] TXXX Run headless tests, build, app run, and deploy preview validation
- [ ] TXXX Run quickstart.md validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Required utility/container tests MUST be written before implementation
- Bug regression tests MUST fail before implementation and pass after
- Local content before utilities/hooks
- Utilities before stateful React containers
- Stateful React containers before presentational integration
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together:
Task: "Pure utility test for [data behavior] in src/features/<feature>/utils/[utility].test.ts"
Task: "React component test for [state/orchestration] in src/features/<feature>/components/[Component].test.tsx"

# Launch independent React files for User Story 1 together:
Task: "Create local content in src/features/<feature>/data/[content].ts"
Task: "Create presentational component files in src/features/<feature>/components/"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify regression tests fail before implementing bug fixes
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
