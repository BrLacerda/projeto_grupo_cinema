import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div class="left">
		<h4 class="title-footer">Mov <span>Yes</span></h4>
		
    		<p class="links">
			<a href="#" title="Home">Mapa do site</a>
			<a href="#" title="Html">Fale conosco</a>
			<a href="#" title="Css">Siga-nos</a>
		</p>

		
	
		<p class="Copyright">Copyright &copy; 2022 MovYes - Todos os Direitos Reservados.</p>
    
		
    </div>
                
	
  	<div class="right">
		<h4 class="title-footer">Contato</h4>
		<form action="#" method="post">
			<input type="text" name="nome" placeholder="Nome" required=""/>
			<input type="email" name="email" placeholder="E-mail" required=""/>
			<input type="text" name="assunto" placeholder="assunto" required=""/>
			<textarea name="messagem" placeholder="Messagem" required=""></textarea>
			<button class="btn">Enviar</button>
		</form>
	</div>
    </footer>
  )
}

export default Footer


