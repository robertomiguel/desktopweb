import React, { Component} from 'react';
import FontIcon from 'material-ui/FontIcon';

import './icon.css';

const iconos = [
  'accessibility','accessible','account_balance_wallet','account_balance','account_box','account_circle','add_shopping_cart','alarm_add','alarm_off','alarm_on','alarm','all_out','android','announcement','aspect_ratio','assessment','assignment_ind','assignment_late','assignment_return','assignment_returned','assignment_turned_in','assignment','autorenew','backup','book','bookmark_border','bookmark','bug_report','build','cached','camera_enhance','card_giftcard','card_membership','card_travel','change_history','check_circle','chrome_reader_mode','class','code','compare_arrows','copyright','credit_card','dashboard','date_range','delete_forever','delete','description','dns','done_all','done','donut_large','donut_small','eject','euro_symbol','event_seat','event','exit_to_app','explore','extension','face','favorite_border','favorite','feedback','find_in_page','find_replace','fingerprint','flight_land','flight_takeoff','flip_to_back','flip_to_front','g_translate','gavel','get_app','gif','grade','group_work','help_outline','help','highlight_off','history','home','hourglass_empty','hourglass_full','http','https','important_devices','info_outline','info','input','invert_colors','label_outline','label','language','launch','lightbulb_outline','line_style','line_weight','list','lock_open','lock_outline','lock','loyalty','markunread_mailbox','motorcycle','note_add','offline_pin','opacity','open_in_browser','open_in_new','open_with','pageview','pan_tool','payment','perm_camera_mic','perm_contact_calendar','perm_data_setting','perm_device_information','perm_identity','perm_media','perm_phone_msg','perm_scan_wifi','pets','picture_in_picture_alt','picture_in_picture','play_for_work','polymer','power_settings_new','pregnant_woman','print','query_builder','question_answer','receipt','record_voice_over','redeem','remove_shopping_cart','reorder','report_problem','restore_page','restore','room','rounded_corner','rowing','schedule','search','settings_applications','settings_backup_restore','settings_bluetooth','settings_brightness','settings_cell','settings_ethernet','settings_input_antenna','settings_input_component','settings_input_composite','settings_input_hdmi','settings_input_svideo','settings_overscan','settings_phone','settings_power','settings_remote','settings_voice','settings','shop_two','shop','shopping_basket','shopping_cart','speaker_notes_off','speaker_notes','spellcheck','stars','store','subject','supervisor_account','swap_horiz','swap_vert','swap_vertical_circle','system_update_alt','tab_unselected','tab','theaters','3d_rotation','thumb_down','thumb_up','thumbs_up_down','timeline','toc','today','toll','touch_app','track_changes','translate','trending_down','trending_flat','trending_up','turned_in_not','turned_in','update','verified_user','view_agenda','view_array','view_carousel','view_column','view_day','view_headline','view_list','view_module','view_quilt','view_stream','view_week','visibility_off','visibility','watch_later','work','youtube_searched_for','zoom_in','zoom_out'
];

class Icon extends Component {
  estilo = {fontSize: this.props.size ? this.props.size : '18px'}
  render() {
    return (
      <span className="icon-texto">
        <FontIcon className="material-icons" style={this.estilo}>
          {iconos[this.props.indice]}
        </FontIcon>
        {
          this.props.texto && (<span>{this.props.texto}</span>)
        }
      </span>
    )
  }
}

class IconTabla extends Component {
  render() {
    return (
      <div>
        {iconos.map( (n, i=0 ) =>
          <span key={i} >
            <Icon indice={i} size='40px' texto={i} />
          </span> )}
      </div>
    )
  }
}

export {Icon, IconTabla};
