import { Member, fetchMembers } from "@campphillip/api";
import React, { useEffect, useState } from "react";
import { MemberContainer } from "@campphillip/ui";

export const MemberApiContainer = () => {
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMembers()
            .then((member) => setMembers(member))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return <MemberContainer members={members} />;
};
