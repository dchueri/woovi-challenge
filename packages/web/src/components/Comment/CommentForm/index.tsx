import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import { CommentCreate } from '../../../modules/comment/CommentCreateMutation';

import { useMutation } from 'react-relay';

import { Card, CardActions, TextField } from '@mui/material';
import { CommentCreateMutation } from '../../../modules/comment/__generated__/CommentCreateMutation.graphql';

const CommentComposer = (props: { movie: string }) => {
  const [text, setText] = useState<string>('');
  const movie = props.movie;

  const [commentCreate, isPending] =
    useMutation<CommentCreateMutation>(CommentCreate);

  const onSubmit = () => {
    const config = {
      variables: {
        input: {
          text,
          movie,
        },
      },
      onCompleted: res => {
        setText('');
      },
      onError: e => console.log(e),
    };

    commentCreate(config);
  };

  const isDisabled = text.length <= 3 || isPending;

  return (
    <Card sx={{ marginBottom: '10px', flexDirection: 'column', display: "none" }}>
      <CardContent>
        <TextField
          label="Share your comment..."
          sx={{ width: '100%' }}
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={onSubmit}
          disabled={isDisabled}
        >
          Send
        </Button>
      </CardActions>
    </Card>
  );
};

export default CommentComposer;
