import { defineRailway, project, service } from "railway/iac";

// New Railway project (EVE-435). No GitHub source — Origin + CLI/tarball.
// Cursorio attaches 1gb.lol and www.1gb.lol on that project.
export default defineRailway(() => {
  const web = service("1gb-lol", {
    build: "npm run build",
    start: "npm start",
    healthcheck: "/health",
    healthcheckTimeout: 120,
    env: {
      NODE_ENV: "production",
    },
  });

  return project("1gb-lol", {
    resources: [web],
  });
});
