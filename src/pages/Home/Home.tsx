import { Stack, Link, Typography, Button } from "@mui/material";
import { Container } from "../../components/container";
import { HomeWrapper } from "./Home.styled";
import { BiDownload, BiLogoInstagram, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import Img from "../../assets/images/me.png";
import Curriculo from "../../assets/images/Curriculo.pdf";


export const Home = () => {

	return (
		<Container>
			<HomeWrapper>
				<Stack className="text__content">
					<Stack spacing={0.75}>
						<Typography variant="h1">
							Olá, meu nome é <span>Breno Cardozo!</span>
						</Typography>

						<Typography variant="h2">
							Desenvolvedor <span>Full-Stack</span>
						</Typography>
					</Stack>

					<Typography>
						Tenho 18 anos, sou um estudante na área da programação e busco diariamente adquirir novos conhecimentos visando me tornar um profissional mais completo, atualmente estudo na Fundação Santo André, estou no primeiro semestre do curso Ciências da Computação.
					</Typography>

					<Stack className="links">
						<a href={Curriculo} download="Curriculo.pdf">
							<Button variant="contained">
								<span className="cv">
									<BiDownload size={28} />
									Currículo
								</span>
							</Button>
						</a>

						<Stack className="icons" direction="row">
							<Link target="_blank" href="https://www.instagram.com/brenocardozof/" >
								<span className="icon">
									<BiLogoInstagram />
								</span>
							</Link>

							<Link target="_blank" href="https://www.linkedin.com/in/brenocardozo/">
								<span className="icon">
									<BiLogoLinkedin />
								</span>
							</Link>

							<Link target="_blank" href="https://github.com/Breno-Cardozo">
								<span className="icon">
									<BiLogoGithub />
								</span>
							</Link>
						</Stack>
					</Stack>
				</Stack>
				<img src={Img} alt="Foto do Breno Cardozo Fagundes" />
			</HomeWrapper>
		</Container>
	)
}