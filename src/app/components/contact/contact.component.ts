import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contato = {
    nome: '',
    email: '',
    whatsapp: '',
    empresa: '',
    mensagem: '',
  };
  aviso = '';

  validateForm() {
    if (
      !this.contato.nome ||
      !this.contato.whatsapp ||
      !this.contato.mensagem
    ) {
      this.aviso = 'Por favor, preencha os campos obrigatórios.';
      return false;
    }
    this.aviso = '';
    return true;
  }

  sendForm() {
    if (this.validateForm()) {
      const { nome, email, whatsapp, empresa, mensagem } = this.contato;
      const msg = `Nome: ${nome}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nEmpresa: ${empresa}\nMensagem: ${mensagem}`;
      const whatsappUrl = `https://wa.me/5516997249285?text=${encodeURIComponent(
        msg
      )}`;
      window.open(whatsappUrl, '_blank');
      this.contato = {
        nome: '',
        email: '',
        whatsapp: '',
        empresa: '',
        mensagem: '',
      };
    }
  }
}
