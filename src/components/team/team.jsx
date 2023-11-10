import './team.scss';
import { teamMember } from './teamData';
import BlockTitle from '../block-title/block-title';

function MemberCard() {
   
    const memberList = teamMember.map(member =>
        <div key={member.id} className="team__member">
            <a href={member.nameLink}><img src={member.imageSrc} alt={member.name} /></a>
            <span className="member__name">
                <a href={member.nameLink}>{member.name}</a>
            </span>
            <span className="member__post">{member.post}</span>

            <div className="social__links">
                <a href={member.beLink}><img src={member.beIcon} alt="#" /></a>
                <a href={member.twitterLink} target="_blank" rel="noreferrer"><img src={member.twitterIcon} alt="#" /></a>
                <a href={member.inLink} target="_blank" rel="noreferrer"><img src={member.inIcon} alt="#" /></a>
                <a href={member.emailAdress}><img src={member.emailIcon} alt="#" /></a>
            </div>  
        </div>
    );    
    return <div className="team__items">{memberList}</div>
}

export default function Team() {
    return (
        <div className="team">
            <div className="conteiner">
                <BlockTitle title={'Our team'} />
                <MemberCard />
            </div>
        </div> 
    );
}