export default { fetch(request, env) { return Response.json({ version: "stable-7-retry-check", installation: env.INSTALLATION_MARKER }); } };
