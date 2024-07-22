import { useState } from "react";
import {
    Container,
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Checkbox,
    FormGroup,
    Button,
    Select,
    MenuItem,
    InputLabel,
    Typography,
    Paper,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";
import "./Achievements.css";

const Achievements = () => {
    const [characterName, setCharacterName] = useState("");
    const [characterClass, setCharacterClass] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [profession, setProfession] = useState("");
    const [battleNet, setBattleNet] = useState("");
    const [discord, setDiscord] = useState("");
    const [raidFrequency, setRaidFrequency] = useState("");
    const [roles, setRoles] = useState({
        tank: false,
        healer: false,
        dps: false,
    });
    const [resume, setResume] = useState(null);
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");
    const [open, setOpen] = useState(false); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!resume) {
            alert("Please upload a screenshot of your character.");
            return;
        }

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            console.log(
                characterName,
                characterClass,
                specialization,
                profession,
                battleNet,
                discord,
                raidFrequency,
                selectedOption,
                roles,
                resume,
                url,
                about
            );
            // napishi SetOpen na true sled kato e success applicationa da se otwarq modala
            setOpen(true); // 

        } catch (error) {
            console.error("Error during form submission:", error);
        }
    };

    // param za specific role, kato polzwam state setter function, koito wzima prev state-a za argument
    // towa trqbwa da update-wa spored most recent state.

    // Naprawi spread za argumenta zaradi shallow copy, koeto da preserve vsichki props v roles state-a
    // obj s key-value pair na role, kato valueto trqbwa da se smenq ako prev. value-to e true stawa false i obratno
        
    const handleRoleChange = (role) => {
        setRoles((prev) => ({
            ...prev,
            [role]: !prev[role],
        }));
    };

    const handleReset = () => {
        setCharacterName("");
        setCharacterClass("");
        setSpecialization("");
        setProfession("");
        setBattleNet("");
        setDiscord("");
        setRaidFrequency("");
        setRoles({
            tank: false,
            healer: false,
            dps: false,
        });
        setResume(null);
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };
    
    // handleClose koito da zatwarq modala i da resetwa formata
    const handleClose = () => {
        setOpen(false); 
        handleReset(); 
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} className="App">
                <Typography variant="h4" gutterBottom>
                    Guild Application Form
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Character Name"
                        variant="outlined"
                        value={characterName}
                        onChange={(e) =>
                            setCharacterName(e.target.value)
                        }
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Class"
                        variant="outlined"
                        value={characterClass}
                        onChange={(e) =>
                            setCharacterClass(e.target.value)
                        }
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Specialization"
                        variant="outlined"
                        value={specialization}
                        onChange={(e) =>
                            setSpecialization(e.target.value)
                        }
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Profession"
                        variant="outlined"
                        value={profession}
                        onChange={(e) =>
                            setProfession(e.target.value)
                        }
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Battle.net ID"
                        variant="outlined"
                        value={battleNet}
                        onChange={(e) =>
                            setBattleNet(e.target.value)
                        }
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Discord ID"
                        variant="outlined"
                        value={discord}
                        onChange={(e) =>
                            setDiscord(e.target.value)
                        }
                        required
                    />
                    <FormControl component="fieldset" margin="normal">
                        <FormLabel component="legend">How many times can you raid per week?</FormLabel>
                        <RadioGroup
                            row
                            name="raidFrequency"
                            value={raidFrequency}
                            onChange={(e) =>
                                setRaidFrequency(e.target.value)
                            }
                        >
                            <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="1"
                            />
                            <FormControlLabel
                                value="2"
                                control={<Radio />}
                                label="2"
                            />
                            <FormControlLabel
                                value="3"
                                control={<Radio />}
                                label="3"
                            />
                            <FormControlLabel
                                value="4"
                                control={<Radio />}
                                label="4"
                            />
                            <FormControlLabel
                                value="other"
                                control={<Radio />}
                                label="Other"
                            />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" margin="normal">
                        <FormLabel component="legend">Roles you can fill</FormLabel>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={roles.tank}
                                        onChange={() =>
                                            handleRoleChange("tank")
                                        }
                                    />
                                }
                                label="Tank"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={roles.healer}
                                        onChange={() =>
                                            handleRoleChange("healer")
                                        }
                                    />
                                }
                                label="Healer"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={roles.dps}
                                        onChange={() =>
                                            handleRoleChange("dps")
                                        }
                                    />
                                }
                                label="DPS"
                            />
                        </FormGroup>
                    </FormControl>
                    <Button
                        variant="contained"
                        component="label"
                        fullWidth
                        margin="normal"
                    >
                        Upload Screenshot of Character
                        <input
                            type="file"
                            hidden
                            onChange={(e) =>
                                setResume(e.target.files[0])
                            }
                        />
                    </Button>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Warcraft Logs"
                        variant="outlined"
                        type="url"
                        value={url}
                        onChange={(e) =>
                            setUrl(e.target.value)
                        }
                        required
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="select-label">
                            Experience with Raids
                        </InputLabel>
                        <Select
                            labelId="select-label"
                            id="select"
                            value={selectedOption}
                            onChange={(e) =>
                                setSelectedOption(
                                    e.target.value
                                )
                            }
                        >
                            <MenuItem value="" disabled>
                                Select your experience
                            </MenuItem>
                            <MenuItem value="beginner">Beginner</MenuItem>
                            <MenuItem value="intermediate">Intermediate</MenuItem>
                            <MenuItem value="advanced">Advanced</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="About Yourself"
                        multiline
                        rows={4}
                        value={about}
                        onChange={(e) =>
                            setAbout(e.target.value)
                        }
                        required
                    />
                    <Box display="flex" justifyContent="space-between" margin="normal">
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleReset}
                        >
                            Reset
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Paper>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Application Submitted</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Your application has been successfully submitted. Thank you!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Achievements;