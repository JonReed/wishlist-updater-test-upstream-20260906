export default { fetch(request, env) { return Response.json({ version: "stable-6", installation: env.INSTALLATION_MARKER }); } };
