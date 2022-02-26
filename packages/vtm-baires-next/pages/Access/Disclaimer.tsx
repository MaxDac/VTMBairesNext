import React from "react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import {menuIconStyle} from "vtm-baires-next-components";
import LoginLayout from "../../components/layouts/LoginLayout";
import {LoginRoutes} from "../../base/routes";

const Disclaimer = (): JSX.Element => {
    return (
        <>
            <Box sx={{margin: "10px"}}>
                <Typography>
                    Registrazione (ai sensi e per gli effetti della legge 196/03)
                </Typography>
                <Typography>
                    L'utente, registrandosi, presta il consenso ed autorizza l'inserimento dei suoi dati personali nella
                    banca dati del gioco con il fine di inserirli nell'elenco dei suoi utenti.
                </Typography>
                <Typography>
                    Gli stessi dati NON saranno ceduti e utilizzati ad alcun soggetto estraneo a chi, attualmente o in
                    futuro, gestisce il presente gioco.
                </Typography>
                <Typography>
                    I dati saranno trattati elettronicamente e serviranno esclusivamente per partecipare al gioco e per
                    ricevere eventuali ed indispensabili comunicazioni tecniche via e-mail.
                </Typography>
                <Typography>
                    I dati inseriti e le comunicazioni fra utenti all'interno del gioco, anche qualora siano indicati
                    come anonimi, privati, non strettamente pertinenti al gioco stesso e/o vengano inviati tra singoli
                    utenti, saranno comunque sempre accessibili ed utilizzabili dai gestori a fini di gioco.
                </Typography>
                <Typography>
                    L'interessato potrà in ogni momento e gratuitamente esercitare i diritti di cui all'art. 13
                    L.196/03, quali:
                    <ul>
                        <li>
                            la possibilità di accedere ai registri del Garante, ottenere informazioni in relazione ai
                            dati che lo riguardano,
                        </li>
                        <li>
                            ottenere la cancellazione o il blocco, ovvero l'aggiornamento, la rettifica o
                            l'integrazione, così come previsto dall'articolo 13 L.196/03
                        </li>
                    </ul>
                    inviando una e-mail all'indirizzo postmaster@vtmbaires.eu.
                </Typography>
                <Typography>
                    Il responsabile tecnico che amministra il database contenente i dati degli utenti coincide con
                    l'intestatario del dominio vtmbaires.eu e puo' essere contattato all'indirizzo e-mail
                    postmaster@vtmbaires.eu.
                </Typography>
                <Typography>
                    L'accesso al gioco è vincolato per via dei contenuti spesso violenti, il turpiloquio, possibili
                    scene di sesso, di discriminazione e inerenti alla tossicodipendenza.
                </Typography>
                <Typography>
                    Pertanto, proseguendo, dichiaro di avere più di 18 anni di età.
                </Typography>
                <Typography>
                    Lo staff si riserva il diritto di limitare, sospendere o cancellare senza preavviso qualunque
                    account senza l'obbligo di giustificazione.
                </Typography>
                <Typography>
                    Lo staff si riserva il diritto di limitare, sospendere o cancellare senza preavviso qualunque
                    account senza l'obbligo di giustificazione.
                </Typography>
                <Typography>
                    Iscrivendosi, l'utente dichiara di aver letto e di accettare queste condizioni.
                </Typography>
            </Box>
            <Box sx={{margin: "0 auto", padding: "20px"}}>
                <Link href={LoginRoutes.register}>
                    <a>
                        Torna alla registrazione
                    </a>
                </Link>
            </Box>
        </>
    );
}

Disclaimer.getLayout = (page: any) => (
    <LoginLayout title="Disclaimer" icon={<ErrorOutlineIcon sx={menuIconStyle} />}>
        {page}
    </LoginLayout>
)

export default Disclaimer;
