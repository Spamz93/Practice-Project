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
            setOpen(true);

        } catch (error) {
            console.error("Error during form submission:", error);
        }
    };

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

    const handleClose = () => {
        setOpen(false);
        handleReset();
    };

    return (
        <Container maxWidth="sm">
            <Paper
                elevation={3}
                sx={{
                    backgroundColor: '#663399',
                    color: 'white',
                    padding: 2,
                    borderRadius: 1,
                }}
            >
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
                        InputProps={{
                            sx: { color: 'limegreen' },
                        }}
                        InputLabelProps={{
                            sx: { color: 'white' },
                        }}
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
                        InputProps={{
                            sx: { color: 'limegreen' },
                        }}
                        InputLabelProps={{
                            sx: { color: 'white' },
                        }}
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
                        InputProps={{
                            sx: { color: 'limegreen' },
                        }}
                        InputLabelProps={{
                            sx: { color: 'white' },
                        }}
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
                        InputProps={{
                            sx: { color: 'limegreen' },
                        }}
                        InputLabelProps={{
                            sx: { color: 'white' },
                        }}
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
                        InputProps={{
                            sx: { color: 'limegreen' },
                        }}
                        InputLabelProps={{
                            sx: { color: 'white' },
                        }}
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
                        InputProps={{
                            sx: { color: 'limegreen' },
                        }}
                        InputLabelProps={{
                            sx: { color: 'white' },
                        }}
                    />
                    <FormControl component="fieldset" margin="normal">
                        <FormLabel component="legend" sx={{ color: 'white' }}>
                            How many times can you raid per week?
                        </FormLabel>
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
                                control={<Radio sx={{ color: 'white' }} />}
                                label="1"
                                sx={{ color: 'white' }}
                            />
                            <FormControlLabel
                                value="2"
                                control={<Radio sx={{ color: 'white' }} />}
                                label="2"
                                sx={{ color: 'white' }}
                            />
                            <FormControlLabel
                                value="3"
                                control={<Radio sx={{ color: 'white' }} />}
                                label="3"
                                sx={{ color: 'white' }}
                            />
                            <FormControlLabel
                                value="4"
                                control={<Radio sx={{ color: 'white' }} />}
                                label="4"
                                sx={{ color: 'white' }}
                            />
                            <FormControlLabel
                                value="other"
                                control={<Radio sx={{ color: 'white' }} />}
                                label="Other"
                                sx={{ color: 'white' }}
                            />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" margin="normal">
                        <FormLabel component="legend" sx={{ color: 'white' }}>
                            Roles you can fill
                        </FormLabel>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={roles.tank}
                                        onChange={() =>
                                            handleRoleChange("tank")
                                        }
                                        sx={{ color: 'white' }}
                                    />
                                }
                                label="Tank"
                                sx={{ color: 'white' }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={roles.healer}
                                        onChange={() =>
                                            handleRoleChange("healer")
                                        }
                                        sx={{ color: 'white' }}
                                    />
                                }
                                label="Healer"
                                sx={{ color: 'white' }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={roles.dps}
                                        onChange={() =>
                                            handleRoleChange("dps")
                                        }
                                        sx={{ color: 'white' }}
                                    />
                                }
                                label="DPS"
                                sx={{ color: 'white' }}
                            />
                        </FormGroup>
                    </FormControl>
                    <Button
                        variant="contained"
                        component="label"
                        fullWidth
                        sx={{
                            backgroundColor: 'purple',
                            color: 'limegreen',
                            '&:hover': {
                                backgroundColor: 'darkpurple',
                            },
                        }}
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
                        InputProps={{
                            sx: { color: 'limegreen' },
                        }}
                        InputLabelProps={{
                            sx: { color: 'white' },
                        }}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel sx={{ color: 'white' }}>
                            Reason for Applying
                        </InputLabel>
                        <Select
                            value={selectedOption}
                            onChange={(e) =>
                                setSelectedOption(e.target.value)
                            }
                            sx={{
                                color: 'limegreen',
                                '& .MuiSelect-icon': {
                                    color: 'white',
                                },
                            }}
                        >
                            <MenuItem value="raiding">
                                Raiding
                            </MenuItem>
                            <MenuItem value="pvp">PvP</MenuItem>
                            <MenuItem value="social">
                                Social
                            </MenuItem>
                            <MenuItem value="other">
                                Other
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Tell us about yourself"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={about}
                        onChange={(e) =>
                            setAbout(e.target.value)
                        }
                        required
                        InputProps={{
                            sx: { color: 'limegreen' },
                        }}
                        InputLabelProps={{
                            sx: { color: 'white' },
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: 'purple',
                            color: 'limegreen',
                            '&:hover': {
                                backgroundColor: 'darkpurple',
                            },
                            marginTop: 2,
                        }}
                    >
                        Submit
                    </Button>
                </Box>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Application Submitted</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Thank you for applying to our guild! We will review your application and get back to you soon.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Paper>
        </Container>
    );
};

export default Achievements;

