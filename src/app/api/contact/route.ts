import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Log para desenvolvimento
    console.log('Formulário recebido:', data);

    // TODO: Implementar envio real com Resend ou Nodemailer
    // Email destino: gabibirger@gmail.com

    // Simulando delay de envio
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada com sucesso!',
    });
  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao enviar mensagem.' },
      { status: 500 }
    );
  }
}

