import './FilterPanel.css'
import { ReactComponent as CloseFilter } from '../assets/images/icon-remove.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from '../store/filters/filters-selectors';
import { closeFilter, clearFilters } from '../store/filters/filters-actions';

export const FilterPanel = () => {
    const filters = useSelector(selectFilters);
    const dispatch = useDispatch();

    if (filters.length === 0) {
        return null;
    }
    return (
        <div className="filter_panel">
            <div className='select_filters'>
                {filters.map((item) => {
                    return <div key={item} className='current_filter'>
                        <div className='current_filter__name'>
                            {item}
                        </div>
                        <CloseFilter className='current_filter__close' onClick={() => dispatch(closeFilter(item))} />
                    </div>
                })}
            </div>
            <div className='clear' onClick={() => dispatch(clearFilters)}>Clear</div>
        </div>
    )
}