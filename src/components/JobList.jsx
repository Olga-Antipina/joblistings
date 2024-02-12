import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from '../store/filters/filters-actions';
import { selectVisiblePositions } from '../store/positions/positions-selectors';
import { selectFilters } from '../store/filters/filters-selectors';
import { JobPosition } from './JobPosition';
import './JobList.css';


export const JobList = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);
    const positions = useSelector((state) => selectVisiblePositions(state, filters));

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter));
    };

    return (
        <div className='list_container'>
            {positions.map((item) => {
                return <JobPosition
                    key={item.id}
                    handleAddFilter={handleAddFilter}
                    {...item} />
            })}
        </div>
    );
};