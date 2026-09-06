export default { fetch(request, env) { return Response.json({ version: "stable-5", installation: env.INSTALLATION_MARKER }); } };
