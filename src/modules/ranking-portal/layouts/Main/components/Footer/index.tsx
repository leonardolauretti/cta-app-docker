import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import Container from '@material-ui/core/Container';

interface IProps {
    className?: string;
};

const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: theme.spacing(4, 0)
  }
}));

export default function(props: IProps) {
  const { className, ...rest } = props;

  const classes = useStyles(props);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
        <Container maxWidth="lg">

            <Typography variant="body1">
                2019 &copy;{' '}
                <Link
                component="a"
                href="https://saberdaeletronica.com.br"
                target="_blank"
                >
                Saber Comércio e Serviços Ltda
                </Link>
            </Typography>
            <Typography variant="caption">
                Desenvolvido com amor para a parceria Saber da Eletrônica + CTA Eletrônica
            </Typography>

        </Container>
    </div>
  );
};