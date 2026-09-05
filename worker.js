export default { fetch(request, env) { return Response.json({ version: "main-2", installation: env.INSTALLATION_MARKER }); } };
