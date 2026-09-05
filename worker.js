export default { fetch(request, env) { return Response.json({ version: "main-3", installation: env.INSTALLATION_MARKER }); } };
