import { useEffect, useState } from "react";
import styled from "styled-components";
import Profile from "../components/Profile";
import { UserService, getEditorDescription, User } from "suusenju-sdk"

export default function EditorsList () {
  const [editors, setEditors] = useState<User.EditorSummary[]>([])

  useEffect(() => {
    UserService
    .getAllEditors()
      .then(setEditors)
  }, [])

  return <EditorsListWrapper>
    {
      editors.map(editor => {
        return <Profile
          key={editor.id}
          editorId={editor.id}
          name={editor.name}
          description={getEditorDescription(new Date(editor.createdAt))}
          avatarUrl={editor.avatarUrls.small}
        />
      })
    }
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`