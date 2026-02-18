
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req: Request) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const { name, email, profession, message, privacy } = await req.json()

        if (!RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not set')
            return new Response(
                JSON.stringify({ error: 'Server configuration error: Email service not configured' }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
            )
        }

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`
            },
            body: JSON.stringify({
                from: 'Centro de Espiritualidad Clínica <onboarding@resend.dev>', // Update this to your verified domain later
                to: ['contacto@espiritualidadclinica.org'],
                subject: `Nueva Solicitud de Entrevista: ${name}`,
                html: `
          <h1>Nueva Solicitud de Entrevista</h1>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Profesión:</strong> ${profession}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
          <br/>
          <p><em>Aceptó políticas de privacidad: ${privacy ? 'Sí' : 'No'}</em></p>
        `
            })
        })

        const data = await res.json()

        return new Response(
            JSON.stringify(data),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
        )

    } catch (error: any) {
        return new Response(
            JSON.stringify({ error: error.message || 'Unknown error' }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
        )
    }
})
