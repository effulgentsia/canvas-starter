Migrate the repository to shadcn/ui while preserving the current styling.
Refactor existing components to use shadcn primitives where appropriate.

Before you begin, install the required skills:

```bash
npx skills add shadcn/ui -y && \
npx skills add vercel-labs/agent-browser --skill agent-browser -y && \
npx skills add vercel-labs/agent-browser --skill dogfood -y
```

Use the dogfood skill to verify the result in Canvas Workbench.

Before refactoring, capture homepage screenshots at desktop and mobile widths.
After refactoring, capture the same screenshots and compare them to the
baseline.

Preserve the existing layout and styling as closely as possible. Treat visual
differences as regressions unless they are required by the migration. Fix any
horizontal overflow, clipped controls, or mobile layout regressions before you
finish.
