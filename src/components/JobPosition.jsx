import './JobPosition.css'

export const JobPosition = ({
    id,
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    handleAddFilter,
}) => {
    const skills = [].concat(role, level, ...languages, ...tools);
    return (
        <div className={featured ? 'position_container featured' : 'position_container'}>
            <div className='left_part'>
                <div><img src={logo} alt={company} /></div>
                <div className='strings'>
                    <div className='first_string'>
                        <div className='first_string__company'>{company}</div>
                        {isNew && <div className='first_string__sticker_new'>NEW!</div>}
                        {featured && <div className='first_string__sticker_featured'>FEATURED</div>}
                    </div>
                    <div className='second_string'>{position}</div>
                    <div className='third_string'>
                        <span>{postedAt}</span>
                        <span className='third_string__contract'>{contract}</span>
                        <span>{location}</span>
                    </div>
                </div>
            </div>
            <div className='right_part'>
                {
                    skills.map((item) => {
                        return <span
                            key={item}
                            className='skill'
                            onClick={() => handleAddFilter(item)}>
                            {item}
                        </span>
                    })
                }
            </div>
        </div>
    );
};