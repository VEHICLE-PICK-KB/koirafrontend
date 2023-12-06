import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { useState } from "react";
import theme from '../Theme';

const AboutSivu = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        switch (panel) {
            case 'panel1':
                setIsOpen1(isExpanded);
                break;
            case 'panel2':
                setIsOpen2(isExpanded);
                break;
            case 'panel3':
                setIsOpen3(isExpanded);
                break;
            case 'panel4':
                setIsOpen4(isExpanded);
                break;
            default:
                break;
        }
    };

    const accordionStyles = {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        width: '70%',
//        margin: '0 auto',
    };

    const accordionDetailsStyles = {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left', 
        width: '100%',
        margin: '0 auto',
    };
    

    return (
        <div style={{ marginTop: '20px', backgroundColor: '#e8f5e9' }}>
            <Accordion expanded={isOpen1} onChange={handleAccordionChange('panel1')} sx={accordionStyles}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#fff' }}>
                    <Typography>Keitä olemme?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={accordionDetailsStyles}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque ac neque dignissim, porta nibh facilisis, venenatis mauris.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Donec feugiat hendrerit ipsum, ac accumsan lorem porta venenatis.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={isOpen2} onChange={handleAccordionChange('panel2')} sx={accordionStyles}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#fff' }}>
                    <Typography>Tuotteistamme</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        In sed mi arcu.
                        Nunc dignissim elit vitae dolor dictum hendrerit.
                        Aliquam ullamcorper rutrum eleifend. Cras convallis tellus at accumsan mollis.
                        Nunc purus ligula, euismod sit amet nunc eget, suscipit porta eros.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={isOpen3} onChange={handleAccordionChange('panel3')} sx={accordionStyles}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#fff' }}>
                    <Typography>Vaihdot ja palautukset</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Vivamus ut ultricies velit, in auctor orci.
                        Donec tristique odio in laoreet hendrerit.
                        Pellentesque eros ligula, vulputate eget dictum quis, tristique in sem. Aliquam a auctor nibh.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={isOpen4} onChange={handleAccordionChange('panel4')} sx={accordionStyles}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#fff' }}>
                    <Typography>Hae meille töihin!</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Sed ac enim quis metus vestibulum iaculis at a mauris.
                        Suspendisse volutpat, nunc id dictum lacinia, est risus blandit leo, a commodo purus sapien et quam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
export default AboutSivu;