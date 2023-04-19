import React from "react";
import {
  LibraryContainer,
  LibrarySection,
  HeaderContainer,
  HeaderTitleSpan,
} from "../../styledComponents/StyledLibrary";
import RoomList from "../rooms/RoomList";
import { RoomSection } from "../../styledComponents/StyledRoom";


export const Library: React.FC = () => {
  return (
    <LibrarySection>
      <LibraryContainer>
        <HeaderContainer>
          <HeaderTitleSpan>Choose the room</HeaderTitleSpan>
        </HeaderContainer>
        <RoomSection>
        <RoomList />
        </RoomSection>
      </LibraryContainer>
    </LibrarySection>
  );
};

export default Library;