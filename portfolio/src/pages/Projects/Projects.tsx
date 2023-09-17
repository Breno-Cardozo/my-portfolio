import { Stack, Typography, Card, CardMedia, CardContent, Link } from "@mui/material";
import { ProjectsWrapper } from "./Projects.styled";
import { Container } from "../../components/container";
import TodoList from "../../assets/images/todo.png";
import TodoListReact from "../../assets/images/todoreact.png";
import Temp from "../../assets/images/tempo.png";
import Snake from "../../assets/images/snake.png";
import { BiLogoGithub, BiSolidRightTopArrowCircle } from "react-icons/bi";

export const Projects = () => {
    return (
        <Container>
            <ProjectsWrapper>
                <Stack className="hero__content">
                    <Card className="card" sx={{
                        maxWidth: 250, transition: "transform .3s ease", "&:hover": {
                            transform: "scale(1.1)",
                        },
                    }}>
                        <CardMedia
                            component="img"
                            alt="projeto Snake Game"
                            height="150"
                            image={Snake}
                        />
                        <CardContent className="text">
                            <Typography variant="h3">
                                Jogo da <span>Cobrinha</span>
                            </Typography>
                            <Typography>
                                Confira o "Jogo da Cobrinha" que eu desenvolvi utilizando <span>JavaScript, HTML, CSS</span>.
                            </Typography>
                            <Stack className="icons">
                                <Link target="_blank" href="https://github.com/Breno-Cardozo/snake-game">
                                    <BiLogoGithub />
                                </Link>
                                <Link target="_blank" href="https://snake-game-eta-gilt.vercel.app/">
                                    <BiSolidRightTopArrowCircle />
                                </Link>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card className="card" sx={{
                        maxWidth: 250, transition: "transform .3s ease", "&:hover": {
                            transform: "scale(1.1)",
                        },
                    }}>
                        <CardMedia
                            component="img"
                            alt="projeto Snake Game"
                            height="150"
                            image={TodoList}
                        />
                        <CardContent className="text">
                            <Typography variant="h3">
                                To do <span>List</span>
                            </Typography>
                            <Typography>
                                Confira o "To do List" que eu desenvolvi armazenando em um banco de dados <span>MySQL, JavaSript, HTML e CSS</span>.
                            </Typography>
                            <Stack className="icons">
                                <Link target="_blank" href="https://github.com/Breno-Cardozo/todolist">
                                    <BiLogoGithub />
                                </Link>
                                <Link target="_blank" href="https://todolist-phi-steel.vercel.app/">
                                    <BiSolidRightTopArrowCircle />
                                </Link>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card className="card" sx={{
                        maxWidth: 250, transition: "transform .3s ease", "&:hover": {
                            transform: "scale(1.1)",
                        },
                    }}>
                        <CardMedia
                            component="img"
                            alt="projeto Snake Game"
                            height="150"
                            image={TodoListReact}
                        />
                        <CardContent className="text">
                            <Typography variant="h3">
                                To do List <span>React</span>
                            </Typography>
                            <Typography>
                                Confira o "To do List em React" que eu desenvolvi utilizando <span>React, Vite e CSS</span>.
                            </Typography>
                            <Stack className="icons">
                                <Link target="_blank" href="https://github.com/Breno-Cardozo/To-Do-List_">
                                    <BiLogoGithub />
                                </Link>
                                <Link target="_blank" href="https://to-do-list-blush-chi.vercel.app/">
                                    <BiSolidRightTopArrowCircle />
                                </Link>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card className="card" sx={{
                        maxWidth: 250, transition: "transform .3s ease", "&:hover": {
                            transform: "scale(1.1)",
                        },
                    }}>
                        <CardMedia
                            component="img"
                            alt="projeto Snake Game"
                            height="150"
                            image={Temp}
                        />
                        <CardContent className="text">
                            <Typography variant="h3">
                                Temperatura <span>React</span>
                            </Typography>
                            <Typography>
                                Confira o "Busca de temperatura" que eu desenvolvi utilizando <span>React e Tailwind</span>.
                            </Typography>
                            <Stack className="icons">
                                <Link target="_blank" href="https://github.com/Breno-Cardozo/App-React-Temp">
                                    <BiLogoGithub />
                                </Link>
                                <Link target="_blank" href="https://app-react-temp.vercel.app/">
                                    <BiSolidRightTopArrowCircle />
                                </Link>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
            </ProjectsWrapper>
        </Container>
    )
}