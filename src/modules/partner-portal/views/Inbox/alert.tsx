import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function() {
    const [open, setOpen] = useState(true);

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            disableBackdropClick
            disableEscapeKeyDown
        >
            <DialogTitle>{"Em breve novo recurso de mensagens"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    A CTA Eletrônica desenvolveu um portal totalmente repensado para facilitar a integração entre os técnicos e empresas parceiras.
                    Os últimos ajustes estão em andamento e, em breve, o portal estará pronto para enviar e receber mensagens instantânes.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)} color="primary">
                    Entendi
                </Button>
            </DialogActions>
      </Dialog>
    );
}