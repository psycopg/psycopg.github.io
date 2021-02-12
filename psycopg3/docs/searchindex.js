Search.setIndex({docnames:["adapt-types","adaptation","advanced/index","api/index","async","basic/index","connection","copy","cursor","cursors","errors","from_pg2","index","install","params","pq","prepared","sql","transactions","types","usage"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["adapt-types.rst","adaptation.rst","advanced/index.rst","api/index.rst","async.rst","basic/index.rst","connection.rst","copy.rst","cursor.rst","cursors.rst","errors.rst","from_pg2.rst","index.rst","install.rst","params.rst","pq.rst","prepared.rst","sql.rst","transactions.rst","types.rst","usage.rst"],objects:{"psycopg3.AsyncConnection":{close:[6,1,1,""],commit:[6,1,1,""],connect:[6,1,1,""],cursor:[6,1,1,""],execute:[6,1,1,""],notifies:[6,1,1,""],rollback:[6,1,1,""],set_autocommit:[6,1,1,""],set_client_encoding:[6,1,1,""],transaction:[6,1,1,""]},"psycopg3.AsyncCopy":{read:[8,1,1,""],read_row:[8,1,1,""],rows:[8,1,1,""],write:[8,1,1,""],write_row:[8,1,1,""]},"psycopg3.AsyncCursor":{close:[8,1,1,""],connection:[8,2,1,""],copy:[8,1,1,""],execute:[8,1,1,""],executemany:[8,1,1,""],fetchall:[8,1,1,""],fetchmany:[8,1,1,""],fetchone:[8,1,1,""],scroll:[8,1,1,""],stream:[8,1,1,""]},"psycopg3.AsyncServerCursor":{close:[8,1,1,""],execute:[8,1,1,""],executemany:[8,1,1,""],fetchall:[8,1,1,""],fetchmany:[8,1,1,""],fetchone:[8,1,1,""],scroll:[8,1,1,""]},"psycopg3.Column":{display_size:[8,1,1,""],internal_size:[8,1,1,""],name:[8,1,1,""],precision:[8,1,1,""],scale:[8,1,1,""],type_code:[8,1,1,""]},"psycopg3.Connection":{add_notice_handler:[6,1,1,""],add_notify_handler:[6,1,1,""],autocommit:[6,2,1,""],cancel:[6,1,1,""],client_encoding:[6,2,1,""],close:[6,1,1,""],closed:[6,2,1,""],commit:[6,1,1,""],connect:[6,1,1,""],cursor:[6,1,1,""],execute:[6,1,1,""],info:[6,2,1,""],notifies:[6,1,1,""],prepare_threshold:[6,2,1,""],prepared_max:[6,2,1,""],remove_notice_handler:[6,1,1,""],remove_notify_handler:[6,1,1,""],rollback:[6,1,1,""],transaction:[6,1,1,""]},"psycopg3.Copy":{read:[8,1,1,""],read_row:[8,1,1,""],rows:[8,1,1,""],set_types:[8,1,1,""],write:[8,1,1,""],write_row:[8,1,1,""]},"psycopg3.Cursor":{close:[8,1,1,""],closed:[8,2,1,""],connection:[8,2,1,""],copy:[8,1,1,""],description:[8,2,1,""],execute:[8,1,1,""],executemany:[8,1,1,""],fetchall:[8,1,1,""],fetchmany:[8,1,1,""],fetchone:[8,1,1,""],format:[8,2,1,""],nextset:[8,1,1,""],params:[8,2,1,""],pgresult:[8,2,1,""],query:[8,2,1,""],rowcount:[8,2,1,""],rownumber:[8,2,1,""],scroll:[8,1,1,""],stream:[8,1,1,""]},"psycopg3.Notify":{channel:[6,2,1,""],payload:[6,2,1,""],pid:[6,2,1,""]},"psycopg3.ServerCursor":{close:[8,1,1,""],execute:[8,1,1,""],executemany:[8,1,1,""],fetchall:[8,1,1,""],fetchmany:[8,1,1,""],fetchone:[8,1,1,""],itersize:[8,2,1,""],name:[8,2,1,""],scroll:[8,1,1,""]},"psycopg3.Transaction":{connection:[6,2,1,""],savepoint_name:[6,1,1,""]},"psycopg3.adapt":{Dumper:[1,0,1,""],Format:[1,0,1,""],Loader:[1,0,1,""],Transformer:[1,0,1,""]},"psycopg3.adapt.Dumper":{dump:[1,1,1,""],format:[1,2,1,""],oid:[1,2,1,""],quote:[1,1,1,""],register:[1,1,1,""]},"psycopg3.adapt.Format":{AUTO:[1,2,1,""],BINARY:[1,2,1,""],TEXT:[1,2,1,""]},"psycopg3.adapt.Loader":{format:[1,2,1,""],load:[1,1,1,""],register:[1,1,1,""]},"psycopg3.errors":{DataError:[10,3,1,""],DatabaseError:[10,3,1,""],Diagnostic:[10,0,1,""],Error:[10,3,1,""],IntegrityError:[10,3,1,""],InterfaceError:[10,3,1,""],InternalError:[10,3,1,""],NotSupportedError:[10,3,1,""],OperationalError:[10,3,1,""],ProgrammingError:[10,3,1,""],Warning:[10,3,1,""],lookup:[10,5,1,""]},"psycopg3.errors.Diagnostic":{column_name:[10,2,1,""],constraint_name:[10,2,1,""],context:[10,2,1,""],datatype_name:[10,2,1,""],internal_position:[10,2,1,""],internal_query:[10,2,1,""],message_detail:[10,2,1,""],message_hint:[10,2,1,""],message_primary:[10,2,1,""],schema_name:[10,2,1,""],severity:[10,2,1,""],severity_nonlocalized:[10,2,1,""],source_file:[10,2,1,""],source_function:[10,2,1,""],source_line:[10,2,1,""],sqlstate:[10,2,1,""],statement_position:[10,2,1,""],table_name:[10,2,1,""]},"psycopg3.errors.Error":{diag:[10,2,1,""]},"psycopg3.pq":{ConnStatus:[15,0,1,""],Conninfo:[15,0,1,""],DiagnosticField:[15,0,1,""],Escaping:[15,0,1,""],ExecStatus:[15,0,1,""],Format:[15,0,1,""],PGcancel:[15,0,1,""],PGconn:[15,0,1,""],PGresult:[15,0,1,""],Ping:[15,0,1,""],PollingStatus:[15,0,1,""],TransactionStatus:[15,0,1,""],__impl__:[15,6,1,""],error_message:[15,5,1,""],version:[15,5,1,""]},"psycopg3.pq.ConnStatus":{BAD:[15,2,1,""],OK:[15,2,1,""]},"psycopg3.pq.DiagnosticField":{COLUMN_NAME:[15,2,1,""],CONSTRAINT_NAME:[15,2,1,""],CONTEXT:[15,2,1,""],DATATYPE_NAME:[15,2,1,""],INTERNAL_POSITION:[15,2,1,""],INTERNAL_QUERY:[15,2,1,""],MESSAGE_DETAIL:[15,2,1,""],MESSAGE_HINT:[15,2,1,""],MESSAGE_PRIMARY:[15,2,1,""],SCHEMA_NAME:[15,2,1,""],SEVERITY:[15,2,1,""],SEVERITY_NONLOCALIZED:[15,2,1,""],SOURCE_FILE:[15,2,1,""],SOURCE_FUNCTION:[15,2,1,""],SOURCE_LINE:[15,2,1,""],SQLSTATE:[15,2,1,""],STATEMENT_POSITION:[15,2,1,""],TABLE_NAME:[15,2,1,""]},"psycopg3.pq.ExecStatus":{BAD_RESPONSE:[15,2,1,""],COMMAND_OK:[15,2,1,""],COPY_BOTH:[15,2,1,""],COPY_IN:[15,2,1,""],COPY_OUT:[15,2,1,""],EMPTY_QUERY:[15,2,1,""],FATAL_ERROR:[15,2,1,""],NONFATAL_ERROR:[15,2,1,""],SINGLE_TUPLE:[15,2,1,""],TUPLES_OK:[15,2,1,""]},"psycopg3.pq.Format":{BINARY:[15,2,1,""],TEXT:[15,2,1,""]},"psycopg3.pq.PGcancel":{cancel:[15,1,1,""],free:[15,1,1,""]},"psycopg3.pq.PGconn":{get_cancel:[15,1,1,""]},"psycopg3.pq.Ping":{NO_ATTEMPT:[15,2,1,""],NO_RESPONSE:[15,2,1,""],OK:[15,2,1,""],REJECT:[15,2,1,""]},"psycopg3.pq.PollingStatus":{FAILED:[15,2,1,""],OK:[15,2,1,""],READING:[15,2,1,""],WRITING:[15,2,1,""]},"psycopg3.pq.TransactionStatus":{ACTIVE:[15,2,1,""],IDLE:[15,2,1,""],INERROR:[15,2,1,""],INTRANS:[15,2,1,""],UNKNOWN:[15,2,1,""]},"psycopg3.sql":{Composable:[17,0,1,""],Composed:[17,0,1,""],DEFAULT:[17,6,1,""],Identifier:[17,0,1,""],Literal:[17,0,1,""],NULL:[17,6,1,""],Placeholder:[17,0,1,""],SQL:[17,0,1,""],quote:[17,5,1,""]},"psycopg3.sql.Composable":{as_string:[17,1,1,""]},"psycopg3.sql.Composed":{join:[17,1,1,""]},"psycopg3.sql.SQL":{format:[17,1,1,""],join:[17,1,1,""]},"psycopg3.types":{CompositeInfo:[19,0,1,""],Json:[19,0,1,""],JsonBinaryDumper:[19,0,1,""],JsonBinaryLoader:[19,0,1,""],JsonDumper:[19,0,1,""],JsonLoader:[19,0,1,""],Jsonb:[19,0,1,""],JsonbBinaryDumper:[19,0,1,""],JsonbBinaryLoader:[19,0,1,""],JsonbDumper:[19,0,1,""],JsonbLoader:[19,0,1,""],RangeInfo:[19,0,1,""],TypeInfo:[19,0,1,""],set_json_dumps:[19,5,1,""],set_json_loads:[19,5,1,""]},"psycopg3.types.CompositeInfo":{register:[19,1,1,""]},"psycopg3.types.JsonDumper":{get_dumps:[19,1,1,""]},"psycopg3.types.JsonLoader":{get_loads:[19,1,1,""]},"psycopg3.types.RangeInfo":{register:[19,1,1,""]},"psycopg3.types.TypeInfo":{fetch:[19,1,1,""],fetch_async:[19,1,1,""],register:[19,1,1,""]},psycopg3:{AsyncConnection:[6,0,1,""],AsyncCopy:[8,0,1,""],AsyncCursor:[8,0,1,""],AsyncServerCursor:[8,0,1,""],AsyncTransaction:[6,0,1,""],Column:[8,0,1,""],Connection:[6,0,1,""],Copy:[8,0,1,""],Cursor:[8,0,1,""],Notify:[6,0,1,""],Rollback:[6,3,1,""],ServerCursor:[8,0,1,""],Transaction:[6,0,1,""],errors:[10,4,0,"-"],pq:[15,4,0,"-"],sql:[17,4,0,"-"],types:[19,4,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","exception","Python exception"],"4":["py","module","Python module"],"5":["py","function","Python function"],"6":["py","data","Python data"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:exception","4":"py:module","5":"py:function","6":"py:data"},terms:{"02000":10,"02001":10,"03000":10,"08000":10,"08001":10,"08003":10,"08004":10,"08006":10,"08007":10,"08p01":10,"09000":10,"0a000":10,"0b000":10,"0f000":10,"0f001":10,"0l000":10,"0lp01":10,"0p000":10,"0x00":0,"0x82":0,"0xac":0,"0xe2":0,"0z000":10,"0z002":10,"100":[4,6,8,18,20],"123":0,"20000":10,"2020":14,"2046":7,"21000":10,"2200":10,"22000":10,"22001":10,"22002":10,"22003":10,"22004":10,"22005":10,"22007":10,"22008":10,"22009":10,"2200b":10,"2200c":10,"2200d":10,"2200f":10,"2200g":10,"2200h":10,"2200l":10,"2200m":10,"2200n":10,"2200t":10,"22010":10,"22011":10,"22012":10,"22013":10,"22014":10,"22015":10,"22016":10,"22018":10,"22019":10,"2201b":10,"2201e":10,"2201f":10,"2201g":10,"2201w":10,"2201x":10,"22021":10,"22022":10,"22023":10,"22024":10,"22025":10,"22026":10,"22027":10,"2202e":10,"2202g":10,"2202h":10,"22030":10,"22031":10,"22032":10,"22033":10,"22034":10,"22035":10,"22036":10,"22037":10,"22038":10,"22039":10,"2203a":10,"2203b":10,"2203c":10,"2203d":10,"2203e":10,"2203f":10,"22p01":10,"22p02":10,"22p03":10,"22p04":10,"22p05":10,"22p06":10,"23000":10,"23001":10,"23502":10,"23503":10,"23505":10,"23514":10,"23p01":10,"24000":10,"25000":10,"25001":10,"25002":10,"25003":10,"25004":10,"25005":10,"25006":10,"25007":10,"25008":10,"25p01":10,"25p02":10,"25p03":10,"26000":10,"27000":10,"28000":10,"28p01":10,"2b000":10,"2bp01":10,"2d000":10,"2f000":10,"2f002":10,"2f003":10,"2f004":10,"2f005":10,"34000":10,"38000":10,"38001":10,"38002":10,"38003":10,"38004":10,"39000":10,"39001":10,"39004":10,"39p01":10,"39p02":10,"39p03":10,"3b000":10,"3b001":10,"3d000":10,"3f000":10,"40000":10,"40001":10,"40002":10,"40003":10,"40p01":10,"42000":10,"42501":10,"42601":10,"42602":10,"42611":10,"42622":10,"42701":10,"42702":10,"42703":10,"42704":10,"42710":10,"42712":10,"42723":10,"42725":10,"42803":10,"42804":10,"42809":10,"42830":10,"42846":10,"42883":10,"428c9":10,"42939":10,"42p01":10,"42p02":10,"42p03":10,"42p04":10,"42p05":10,"42p06":10,"42p07":10,"42p08":10,"42p09":10,"42p10":10,"42p11":10,"42p12":10,"42p13":10,"42p14":10,"42p15":10,"42p16":10,"42p17":10,"42p18":10,"42p19":10,"42p20":10,"42p21":10,"42p22":10,"44000":10,"53000":10,"53100":10,"53200":10,"53300":10,"53400":10,"54000":10,"54001":10,"54011":10,"54023":10,"55000":10,"55006":10,"55p02":10,"55p03":10,"55p04":10,"57000":10,"57014":10,"57p01":10,"57p02":10,"57p03":10,"57p04":10,"58000":10,"58030":10,"58p01":10,"58p02":10,"72000":10,"961823":4,"abstract":[1,17],"br\u00fbl\u00e9e":0,"break":14,"byte":[0,1,6,7,8,15,19],"case":[0,1,4,6,7,8,10,11,13,17,18],"catch":10,"char":0,"class":[1,3,9,10,11,15,17,19,20],"cr\u00e8me":0,"default":[0,1,6,7,8,14,16,17,18,19],"enum":[1,15],"export":15,"float":[0,1,14],"function":[0,1,4,9,10,11,12,14,18,19,20],"import":[0,1,4,8,10,13,15,17,18,19,20],"int":[0,1,6,7,8,14,15,19],"long":[7,18],"na\u00efv":14,"new":[6,8,9,15,17,18,20],"null":[7,17],"return":[0,1,4,6,7,8,9,10,11,14,15,17,19,20],"throw":11,"true":[0,4,6,8,10,14,16],"try":[1,6,10,13,15,18],"var":15,"while":[7,14],But:18,FOR:9,For:[1,4,6,7,9,10,14,18,19],INTO:[4,14,20],Its:8,Not:10,One:6,That:4,The:[0,1,4,7,9,10,11,13,14,15,16,17,18,19,20],There:[10,11,15],These:[8,10,15],Use:[0,8,11,17],Using:[0,1,2,8,9,11,14,19,20],WILL:14,WITH:10,Will:15,__del__:15,__impl__:15,a_dat:14,a_str:14,abandon:15,abc:[4,20],abl:[1,4,6,9,13,19],abort:18,about:[0,4,6,8,14,16,19],abov:[6,7,13,16],absolut:[8,17],accent:0,accept:[6,11,14,15],access:[10,11,12,14],accid:[17,18],accord:[0,1,7,8,10,17],account1:18,account2:18,account:[11,18],achiev:8,aconn:4,act:4,action:[10,18],activ:[15,18],activesqltransact:10,actual:15,acur:4,adapt:[2,3,5,6,7,8,15,17,20],adaptcontext:[17,19],add:[0,8,14],add_notice_handl:[6,10],add_notify_handl:[4,6],add_to_bal:18,added:17,address1:19,address2:19,address:11,adminshutdown:10,advanc:12,affect:[6,8,10],after:[6,8,9,10,16],again:15,aka:[0,7],alias:6,all:[1,6,7,8,10,13,14,15,17,18,20],alloc:[8,10],allow:[0,1,4,7,8,9,10,12,14,17,18,19,20],almost:4,alon:7,alpin:13,alreadi:[7,9,10,13,16],also:[0,6,7,8,9,10,11,14,15,17,18,19],alt_nam:19,alter:8,altern:[0,4,11],alwai:[6,14],ambiguousalia:10,ambiguouscolumn:10,ambiguousfunct:10,ambiguousparamet:10,amount:18,an_int:14,ani:[1,6,7,8,9,11,12,14,17,18,19],another_d:14,anymor:10,anyth:0,api:[1,8,12,20],appear:[14,15],appli:7,applic:[0,1,15],approach:14,appropri:[8,14],apt:13,arg:[8,17],argument:[1,6,8,15,17,19],around:[7,15],arrai:[0,1,11,19],array_oid:19,arrays:8,arraysubscripterror:10,arriv:0,artist:14,as_str:17,ascii:0,assertfailur:10,associ:[8,16],assum:1,async:[2,6,7,8,11,19],asyncconnect:[4,7,8,19,20],asynccopi:[7,8],asynccursor:[4,6,9],asynchron:[6,8,12,19],asyncio:[4,6,8,11,20],asynciter:[6,8],asyncservercursor:[6,9],asynctransact:6,attach:6,attack:14,attempt:15,attribut:[0,1,8,10,15,16,18],author:[10,14],auto:[1,17],autocommit:[4,6,7],automat:[1,6,8,11,14,15,16,19],avail:[6,8,10,13,14,15],avali:17,avoid:[8,16,18],awai:14,await:[4,6,7,8],awar:11,back:[0,6,7,13,14,18,19],backend:6,backward:8,bad:[14,15],bad_respons:15,badcopyfileformat:10,balaclava:14,balanc:18,bandwidth:0,bank:18,bar:[0,14,17],base:[1,10,17,19],basic:[4,5,13],batch:[8,17],baz:17,becaus:[0,1,4,7,8,9,11,14,17,18],been:[1,9,11,13,15,19],beer:14,befor:[1,6,7,9,14,15,17],begin:9,behav:[6,8,11],behaviour:[6,7,8,11,18,19],behind:9,being:[9,18],below:10,best:[1,8,15],better:[1,8,15],between:[1,5,10,13,14,18,20],bewar:8,bigint:[0,1,7,11],binari:[1,6,7,8,12,15],bind:[12,13,14],bit:14,bloat:18,block:[4,6,8,11,20],block_siz:7,bool:[0,6,8],both:[4,7,14],bought:14,bound:[8,13,14,19],boundari:8,box:11,branchtransactionalreadyact:10,broken:15,bubbl:18,buffer:[8,14],build:[1,13],built:15,builtin:[1,8,11,14,19,20],bundl:15,burn:1,bytea:[0,11],bytearrai:[0,1,19],bytearri:0,cach:17,cake:1,call:[0,1,6,8,9,10,11,14,18],callabl:[6,19],callback:[4,6,10],camelcas:10,can:[0,1,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20],cancel:[6,15,18],cancelcommand:18,cannot:[0,4,6,11,14,17,18],cannotcoerc:10,cannotconnectnow:10,cantchangeruntimeparam:10,car:1,card:14,cardin:10,cardinalityviol:10,care:[6,14],casenotfound:10,cassett:14,cast:[0,1,7,11],cat:14,catalog:[10,19],caus:[0,10,18],cds:14,certain:[0,1,11,19],chain:8,chanc:18,chang:[0,1,6,7,8,10,13,18,20],changefe:8,channel:[4,6],charact:[0,14,17],characternotinrepertoir:10,check:[6,10,11],checkviol:10,choic:[0,1,8,13,15],choos:[1,14],chosen:[1,6,15],cidr:0,clash:10,classic:[6,8],classmethod:[1,6,19],clearli:17,client:[0,1,6,8,10,11,13,14,15],client_encod:[0,6],close:[4,6,8,11,15,20],cls:[1,19],cockroachdb:8,code:[9,10,14,18],codec:6,col1:7,col2:7,col3:7,col:9,collationmismatch:10,column:[7,14],column_nam:[10,15],com:13,come:[0,7,10,13,14,17],comma:[14,17],command:[4,6,8,9,11,14,15,16,18,20],command_ok:15,commit:[4,6,7,8,18,20],common:[11,17,20],commun:[4,12,15],comp:17,compar:[6,18],compat:[7,10,19],compil:[13,15],complet:[0,7,9,10,11,15,18],complex:1,complianc:10,compliant:[6,8],compos:[6,7,8,11,17],composit:[0,1,3,14,19],compositeinfo:19,compsabl:0,comput:14,con:14,concaten:14,concept:9,conclud:7,concret:[1,19],concurr:6,condens:4,condit:[10,16,18],configfileerror:10,configur:[0,2,6,7,8,10,11,19],configurationlimitexceed:10,conn:[0,4,6,8,9,15,17,18,19,20],connect:[0,1,3,7,8,9,10,14,15,16,17,18,19,20],connection_timeout:6,connectiondoesnotexist:10,connectionexcept:10,connectionfailur:10,conninfo:[6,15],connstatu:15,consequ:[1,4,18],consid:[0,8,11],constant:[15,17],constraint:10,constraint_nam:[10,15],construct:11,constructor:6,consum:[4,9],contact:15,contain:[0,1,4,6,11,13,14,15,16,17],containingsqlnotpermit:10,content:[2,3,5],context:[0,1,4,6,8,10,11,15,17,19,20],continu:[6,14,18],control:[9,10,16,18],conveni:17,convers:[1,16,19,20],convert:[0,1,8,10,14,17,19],cool:6,copi:[1,2,12,15,17],copy_both:15,copy_expert:11,copy_in:15,copy_out:15,core:1,coroutin:[6,8],correct:[14,19,20],could:[0,7,10,14,15],counterpart:[0,4,7,8,9],countri:14,cours:0,cpu:0,craft:14,crash:17,crashshutdown:10,creat:[0,1,6,8,9,14,15,17,18,19,20],creation:8,creativ:[7,8],credit:14,crete:8,csv:7,ctype:[13,15],cur:[0,4,6,7,8,9,10,11,14,17,20],curnam:9,current:[1,6,7,8,13,14,15,18],current_d:[0,7],cursor:[1,2,3,4,6,7,10,11,14,16,17,18,19,20],custom:[8,11,19],customis:[0,1,19],cython:15,danger:17,data:[0,2,4,8,10,11,14,15,19,20],databas:[0,1,4,6,7,8,9,10,11,14,17,18,19,20],databasedrop:10,databaseerror:10,datacorrupt:10,dataerror:10,dataexcept:10,dataset:9,datatype_nam:[10,15],datatypemismatch:10,date:[0,1,7,11,14],datetim:[0,7,8,14],datetimefieldoverflow:10,dbapi:[6,8,10,11],dbname:[4,20],deadlockdetect:10,deal:[0,15,20],dealloc:[6,16],dealt:11,debian:13,debug:13,decid:16,decim:[0,8],declar:[8,9],decod:[0,1,15],def:[4,18,19,20],defin:10,delimit:[7,14,19],demand:19,depend:10,dependentobjectsstillexist:10,dependentprivilegedescriptorsstillexist:10,deriv:10,describ:[1,7,8,13,16,19],descript:15,descriptor:10,design:[4,12],desk:14,destruct:14,detail:[0,6,7,8,10,11,14,15,16],dev:13,develop:15,diag:10,diagnost:[6,10],diagnosticfield:15,diagnosticsexcept:10,dict:0,dictionari:14,did:13,didn:[1,8,13],differ:[0,1,6,7,8,9,10,12,14,16,17,19,20],digit:8,direct:12,directli:[8,9,17],disabl:[0,6,16],disallow:[6,8,15],disambigu:10,discard:[7,18],disconnect:10,disk:14,diskful:10,dispatch:1,display_s:8,distinct:11,divis:10,division_by_zero:10,divisionbyzero:10,document:[0,1,4,7,8,9,10,15,16,19],documet:8,doe:[0,8,11],doesn:[0,1,7,8,9,11,13,15,16,17,19],don:[1,4,8,13,14,15],dot:17,doubl:[0,4,14,17],down:18,downsid:9,drink:14,dump:[0,1,19],dumper:[7,14,19],duplicatealia:10,duplicatecolumn:10,duplicatecursor:10,duplicatedatabas:10,duplicatefil:10,duplicatefunct:10,duplicatejsonobjectkeyvalu:10,duplicateobject:10,duplicatepreparedstat:10,duplicateschema:10,duplicatet:10,dure:[1,4,8,10,15],dynam:[7,11,13,14,17],each:[1,8,10,14,20],eas:[0,11],easi:11,easier:7,easiest:15,easili:14,effect:6,effici:[1,7,8,9,14],either:[0,6,8,14,18,19],element:[14,17],els:18,embarrass:14,empti:[8,11,15],empty_queri:15,enabl:11,encapsul:20,enclos:6,encod:[0,1,6,15],encount:10,end:[6,7,8,9,11,18,20],endless:8,enough:9,enter:18,entir:[9,18],env:15,environ:6,equal:14,equival:[0,8,14],error:[0,3,6,11,13,14,15,18],error_messag:15,errorinassign:10,escap:[0,1,14,15,17],escape_identifi:17,escapecharacterconflict:10,especi:8,etc:10,euc_tw:6,euro:0,european:0,evalu:17,even:[0,6,14,16,17,18,20],eventlet:6,eventtriggerprotocolviol:10,eventu:[6,17],ever:14,everi:[1,6,10,15],everyon:12,exactli:8,examin:10,exampl:[1,4,8,10,11,14,17,18,20],exceed:10,except:[3,6,7,8,11,15,18],exclus:10,exclusionviol:10,execstatu:15,execut:[0,4,6,8,9,10,11,16,17,18,19,20],executemani:[8,17,20],exist:[0,8,10,11,20],exit:[6,7,8],expect:[0,4,8,11,18],experiment:8,explicit:11,explicitli:[6,14,18],exploit:17,expos:[0,8,10,11,15,16,17,19],express:17,extend:19,extens:[8,13],extern:10,externalroutineexcept:10,externalroutineinvocationexcept:10,extra:[13,15],extrem:18,f0000:10,f0001:10,facil:4,factori:[4,19],fail:[0,1,7,10,11,14,15,18],failur:10,fall:14,fallback:15,fals:[0,6,8,16],famili:19,familiar:12,far:7,fast:[1,15],faster:0,fatal:15,fatal_error:15,fdwcolumnnamenotfound:10,fdwdynamicparametervalueneed:10,fdwerror:10,fdwfunctionsequenceerror:10,fdwinconsistentdescriptorinform:10,fdwinvalidattributevalu:10,fdwinvalidcolumnnam:10,fdwinvalidcolumnnumb:10,fdwinvaliddatatyp:10,fdwinvaliddatatypedescriptor:10,fdwinvaliddescriptorfieldidentifi:10,fdwinvalidhandl:10,fdwinvalidoptionindex:10,fdwinvalidoptionnam:10,fdwinvalidstringformat:10,fdwinvalidstringlengthorbufferlength:10,fdwinvaliduseofnullpoint:10,fdwnoschema:10,fdwoptionnamenotfound:10,fdwoutofmemori:10,fdwreplyhandl:10,fdwschemanotfound:10,fdwtablenotfound:10,fdwtoomanyhandl:10,fdwunabletocreateexecut:10,fdwunabletocreaterepli:10,fdwunabletoestablishconnect:10,featur:[8,10,12,14,15],featurenotsupport:10,fetch:[8,9,19],fetch_async:19,fetchal:[8,20],fetchmani:[8,9,20],fetchon:[0,4,8,9,11,20],few:[6,9,11,14,20],field1:17,field2:17,field3:17,field:[0,8,10,14,15,17],field_nam:19,field_typ:19,file:[7,10],fill:20,finalis:[1,18],find:[1,14],finicki:7,finish:[8,15],first:[6,9,14,16],fit:9,fix:8,flaot4:0,flexibl:11,float8:0,floatingpointexcept:10,fly:17,follow:[0,1,4,6,8,10,13,17,18,19],foo:[0,14,17],forc:[6,8,15],force_rollback:6,foreign:[10,14],foreignkeyviol:10,forgotten:17,form:[4,7,11,14,17],format:[0,1,7,8,14,15,17],found:[10,19],free:[8,11,15,20],freed:16,fridg:14,from:[0,1,2,4,6,8,9,10,12,13,14,15,16,17,18,19,20],fulfil:13,full_queri:17,fulli:[1,7],function_nam:11,functionexecutednoreturnstat:10,functool:0,further:[8,16,18],gain:14,gen:4,gener:[4,6,9,10,11,14,17],generatedalwai:10,get:[0,4,12,13],get_cancel:15,get_dump:19,get_load:19,gevent:6,git:13,github:13,give:[7,9],given:8,global:[0,1,17,19],goe:18,good:9,got:4,grantor:10,great:[12,13],groupingerror:10,guarante:10,gui:14,hack:13,hacker:14,hand:10,handi:13,handl:[0,4,6,10,18],hang:14,happen:[0,6,8,10,14,15,17,18],hardcod:17,has:[0,6,8,9,11,12,14,15,18,19],have:[0,1,4,6,7,8,9,10,11,13,14,15,17,18,19,20],haven:13,header:13,hei:4,held:18,heldcursorrequiressameisolationlevel:10,hello:[4,7,14],help:19,here:[4,8,13,18,20],hierarchi:17,high:1,hoc:17,hold:[8,9,19],how:[0,1,4,13,14,19,20],howev:[7,8,9,11,15,16,17,19],hstore:0,http:13,huge:9,hv000:10,hv001:10,hv002:10,hv004:10,hv005:10,hv006:10,hv007:10,hv008:10,hv009:10,hv00a:10,hv00b:10,hv00c:10,hv00d:10,hv00j:10,hv00k:10,hv00l:10,hv00m:10,hv00n:10,hv00p:10,hv00q:10,hv00r:10,hv010:10,hv014:10,hv021:10,hv024:10,hv090:10,hv091:10,hypothet:18,idea:9,identifi:[7,14,17,19],idiomat:10,idl:[15,18],idleintransactionsessiontimeout:10,ignor:18,imag:0,imagin:6,immedi:[4,6,16],implement:[1,6,8,9,11,13,14,18,19,20],impli:0,improv:7,inaccur:1,inappropriateaccessmodeforbranchtransact:10,inappropriateisolationlevelforbranchtransact:10,includ:[6,10,13,14,15,17,18,19],indeterminatecol:10,indeterminatedatatyp:10,index:[5,8,12],indexcorrupt:10,indexerror:8,indicatoroverflow:10,ineffici:17,inerror:15,inet:[0,19],inetrang:19,infailedsqltransact:[10,18],infer:1,infin:1,info:6,inform:[1,7,8,10,15],inherit:[1,17],initi:[8,10],inject:20,inner:18,inner_tx:18,innermost:18,input:[7,8],insert:[0,4,7,8,14,17,20],insid:[6,7,14,18],inspect:10,inspir:[6,8],instal:[5,15],instanc:[0,1,4,6,7,8,9,10,11,13,14,17,18,19,20],instanti:1,instead:[0,4,6,7,8,11,13,14,17,20],instruct:[1,19],insuffici:10,insufficientprivileg:10,insufficientresourc:10,int2:[0,19],int4:[0,7,8,11,19],int8:[0,7,19],integ:[0,1,7,11,14,17,20],integr:[10,12],integrityconstraintviol:10,integrityerror:10,intend:1,inter:8,interact:[4,11,18,20],intercept:18,interfac:[1,4,6,8,9,10,11,12,15,17],interfaceerror:10,intern:[10,18],internal_posit:[10,15],internal_queri:[10,15],internal_s:8,internalerror:10,internalerror_:10,interpol:15,interpos:17,interpret:17,interrupt:7,interv:0,intervalfieldoverflow:10,intervent:10,intran:15,invalid:[10,17],invalidargumentforlogarithm:10,invalidargumentfornthvaluefunct:10,invalidargumentforntilefunct:10,invalidargumentforpowerfunct:10,invalidargumentforsqljsondatetimefunct:10,invalidargumentforwidthbucketfunct:10,invalidauthorizationspecif:10,invalidbinaryrepresent:10,invalidcatalognam:10,invalidcharactervalueforcast:10,invalidcolumndefinit:10,invalidcolumnrefer:10,invalidcursordefinit:10,invalidcursornam:10,invalidcursorst:10,invaliddatabasedefinit:10,invaliddatetimeformat:10,invalidescapecharact:10,invalidescapeoctet:10,invalidescapesequ:10,invalidforeignkei:10,invalidfunctiondefinit:10,invalidgrantoper:10,invalidgrantor:10,invalidindicatorparametervalu:10,invalidjsontext:10,invalidlocatorspecif:10,invalidnam:10,invalidobjectdefinit:10,invalidparametervalu:10,invalidpassword:10,invalidprecedingorfollowings:10,invalidpreparedstatementdefinit:10,invalidrecurs:10,invalidregularexpress:10,invalidrolespecif:10,invalidrowcountinlimitclaus:10,invalidrowcountinresultoffsetclaus:10,invalidsavepointspecif:10,invalidschemadefinit:10,invalidschemanam:10,invalidsqljsonsubscript:10,invalidsqlstatementnam:10,invalidsqlstatereturn:10,invalidtabledefinit:10,invalidtablesampleargu:10,invalidtablesamplerepeat:10,invalidtextrepresent:10,invalidtimezonedisplacementvalu:10,invalidtransactioniniti:10,invalidtransactionst:10,invalidtransactiontermin:10,invaliduseofescapecharact:10,invalidxmlcom:10,invalidxmlcont:10,invalidxmldocu:10,invalidxmlprocessinginstruct:10,invoc:10,invok:[4,6,15],involv:[6,11],ioerror:10,ipaddress:0,isinst:18,isn:1,iso8859:6,item:[8,17],iter:[6,7,8,9,17,20],iters:8,its:[1,6,7,8,9,10,16,17,18,19],itself:[8,10,14],join:17,joiner:17,jsonb:[0,11,19],jsonbbinarydump:19,jsonbbinaryload:19,jsonbdump:19,jsonbinarydump:19,jsonbinaryload:19,jsonbload:19,jsondump:19,jsonload:19,jump:18,just:8,keep:[4,9,18],kei:[6,10,20],keyerror:10,keyword:[4,6,8,17],kind:9,know:[1,13,14],known:[1,14],kwarg:[6,17],lambda:4,languag:[9,12],larg:[0,9],larger:[0,9],last:[0,8],later:17,latin1:[0,6],latin9:[0,6],latin:0,lazi:1,learn:13,least:16,leav:[0,4,7,8,14,18],left:[14,17],len:17,less:[4,6,9,15],let:20,letter:[0,10],level:[1,11,15,16],libpq5:13,libpq:[3,11,12],librari:[0,13,15,19],libssl:13,lifetim:8,like:[0,1,7,8,17,18],limit:10,line:18,linux:13,list:[0,1,6,7,8,11,17,19,20],listen:[4,6],liter:[1,14,17],live:[1,18],load:[0,1,7,11,15,19],loader:[14,19],local:1,locat:10,locatorexcept:10,lock:[8,10,18],lockfileexist:10,locknotavail:10,logger:18,look:[1,6,14,19],lookup:10,loop:18,loss:0,low:[11,15],mac:13,machin:15,made:[1,6,15,17,18],mai:[0,1,4,7,8,10,11,13,14,15,17,18],main:[6,8],maintain:13,make:[0,1,8,11,16,18,20],malform:14,manag:[0,1,4,5,6,7,8,9,11,15,16,19,20],mani:[0,11,14,17],manipul:[0,14,15],manner:4,manual:[4,14,18],map:[0,1,3,6,8,14,17],mark:4,massiv:8,match:[6,8],materi:8,maximum:6,mean:[6,7,10,13,16,18],meant:17,meanwhil:4,mechan:14,med:10,memo:14,memori:[8,9,10],memoryview:[0,1,8],merg:[8,11,14,17],messag:[4,6,13,15,18],message_detail:[10,15],message_hint:[10,15],message_primari:[10,15],met:16,method:[1,4,6,7,8,9,10,11,13,14,17,19,20],might:[1,6,8,9,19],miser:14,mix:14,mode:[4,7,8,10,15],modern:12,modifi:[7,17],modifyingsqldatanotpermit:10,modifyingsqldatanotpermittedext:10,modul:[3,5,7,10,11,12,13,14],moment:8,more:[0,1,6,8,9,12,14,15,16,17,18,19],morethanonesqljsonitem:10,most:[0,1,7,8,13,14,15],mostspecifictypemismatch:10,move:[1,8,9,13],move_monei:18,much:[4,15],mule_intern:6,multipl:[14,17],muse:0,must:[1,6,7,8,11,13,14,17],my_nam:17,my_tabl:17,mychan:4,mytabl:[0,10,19],mytyp:19,mytypearrai:19,mytypeload:19,name:[1,6,8,9,10,14,17,19],namedtupl:0,nametoolong:10,necessari:[1,17],necessarili:[9,10],need:[0,1,4,6,8,9,13,14,15,17,18,19],neg:18,nest:[6,18],network:[11,15],never:[4,10,14],new_bal:18,newli:[12,13],next:8,nextset:8,no_attempt:15,no_respons:15,noactivesqltransact:10,noactivesqltransactionforbranchtransact:10,noadditionaldynamicresultsetsreturn:10,nodata:10,nodatafound:10,non:[0,6,8,19],none:[1,6,7,8,10,15,16,17,19],nonfat:15,nonfatal_error:15,nonnumericsqljsonitem:10,nonstandarduseofescapecharact:10,nonuniquekeysinajsonobject:10,normal:[4,6,7,8,9,11,14,17],nosqljsonitem:10,notanxmldocu:10,note:[0,4,7,8,11,14,16,17],notic:[6,15,20],notif:6,notifi:[4,6,11],notnullviol:10,notsupportederror:10,now:[11,13,14,17,18],nowait:10,nullvaluenoindicatorparamet:10,nullvaluenotallow:10,nullvaluenotallowedext:10,num:[4,20],num_ok:18,number:[6,8,10,11,14,15,16,17,18],numer:[0,1,8,10,11],numericvalueoutofrang:10,obj:[1,15,17,19],object:[0,4,7,10,11,14],objectinus:10,objectnotinprerequisitest:10,obtain:[7,13,20],occur:[10,15],off:9,offer:[4,8,11,15],offset:8,often:[14,17],oid:[1,8,19],old:6,omit:9,onc:[1,8,11,13,19],one:[1,4,6,7,8,9,10,13,14,19],ones:[1,4,6,8,10,14,15,16,17,19],onli:[0,1,4,6,8,9,10,11,14,15,17,18],onto:14,open:[7,8,9,15,20],oper:[0,1,2,6,7,8,10,11,13,14,15,17,18,20],operationalerror:10,operatorintervent:10,opposit:[1,7,10,17],optim:17,optimis:[1,16],option:[6,7,8,10,15,17,19],order:[1,4,7,8,11,13,14],ordinari:15,orient:14,other:[0,4,6,8,10,11,12,14,15,17,18,20],otherwis:[0,6,8,11,14,15,17],out:[7,8,10,11,13,15,18],outer:18,outer_tx:18,outermost:18,outofmemori:10,output:4,outsid:[6,18],over:7,overflow:0,overrid:[1,6,19],own:[0,9],p0000:10,p0001:10,p0002:10,p0003:10,p0004:10,packag:[1,3,13,15,19],page:[1,5,14],pair:6,paper:14,parallel:8,param:[6,8],paramet:[0,1,5,6,7,8,9,10,11,12,15,16,17,18,19,20],params_seq:8,pars:[8,16,19],parse_float:0,part:17,partial:[0,8,9],particularli:[7,13],pass:[0,1,5,6,7,8,9,10,11,16,17,20],past:13,path:[1,13],pattern:[7,8,9,11,20],payload:[4,6],pend:[6,7],peopl:[11,17],per:[0,1,10,19],perfectli:4,perform:[0,1,4,7,8,11,13,14,15,18,20],persist:20,pg10:15,pg_config:13,pg_diag_sever:10,pg_notifi:11,pgcancel:15,pgconn:15,pgresult:[8,15],pgsql:[9,10],phase:[13,15],picklabl:10,pid:[4,6],ping:15,pip:[13,15],pkei:17,place:[13,14,17],placehold:[1,14,17,20],plan:[14,16],platform:15,pleas:[1,4,7,10,13,14],plenti:16,plpgsql:9,plpgsqlerror:10,plu:18,point:[0,8,14],poll:15,pollingstatu:15,popul:19,portal:9,posit:[8,11,14,17],possibl:[1,6,8,9,11,15,17,18],postgr:[4,20],postgresql:[1,4,5,6,7,8,9,10,11,13,14,15,16,17,19,20],potenti:17,pqcancel:15,pqconnectpol:15,pqexecparam:1,pqfreecancel:15,pqgetcancel:15,pqlibvers:15,pqpingparam:15,pqresulterrorfield:[10,15],pqresultstatu:15,pqsendprepar:16,pqsendqueryprepar:16,pqstatu:15,pqtransactionstatu:15,pre:15,preced:8,precis:[0,8,15],prefer:0,prepar:[2,6,8],prepare_threshold:[6,16],prepared_max:[6,16],prerequisit:[10,13],presenc:17,present:[12,17],pretti:4,previou:[7,8,18],previous:[6,18],primari:20,print:[4,7,14,17,20],privileg:10,probabl:[0,8,13,14],problem:[0,7,10,14,17],proce:13,procedur:[11,18],procedure_nam:11,process:[4,6,7,9,10,15,18],process_command:18,produc:[7,8,9],program:[6,10,12,13,14,17,18],programlimitexceed:10,programm:10,programmingerror:10,progress:15,prohibitedsqlstatementattempt:10,prohibitedsqlstatementattemptedext:10,project:13,promot:0,propag:18,properti:[1,6,8],proport:9,proto:[15,17,19],protocol:[7,16,20],protocolviol:10,provid:[1,8,14,19],psql:[4,6,18],psycopg2:[9,12,20],psycopg3:[0,1,4,6,7,8,9,10,12,14,15,16,17,18,19],psycopg3_impl:15,psycopg:[0,1,4,13,14,20],pure:15,pypi:13,python3:13,python:[1,4,5,6,7,9,11,14,15,17,19,20],qualifi:[1,17],queri:[0,1,4,5,6,7,8,9,11,15,16,17,19,20],querycancel:10,queryset:8,quick:9,quickest:13,quirk:[6,15],quit:4,quot:[1,14,17],rais:[6,7,8,10,11,15,18],raiseexcept:10,rang:[0,10,11,19],rangeinfo:19,rare:0,rather:[8,10],read:[1,6,8,9,11,13,14,15,19],read_row:[7,8],readi:[13,15],readingsqldatanotpermit:10,readingsqldatanotpermittedext:10,readm:13,readonlysqltransact:10,real:0,realli:[14,17],reason:[0,9,14,17,18],receiv:[0,4,6,9],recent:[0,16],recevi:6,recip:14,recognis:19,record:[4,7,8,9,11,14,19,20],recordset:8,recurs:1,reduc:8,refcursor:9,refer:[4,10,13],reffunc:9,reflect:6,refus:18,regardless:16,regist:[0,1,4,6,7,10,19],regular:14,reilli:14,reject:[11,15],rel:[8,17],relat:[10,13,14,20],releas:[8,13,14],reliabl:[8,14],remain:[8,18],rememb:14,remove_notice_handl:6,remove_notify_handl:6,repeat:[14,17],replac:17,repli:9,replic:15,report:[8,10,15],repres:[0,1,10,14,15,17],represent:[0,1,14,15],request:[9,15,17],requir:[0,1,4,8,10,13,14,15,18,19],resembl:14,reserv:4,reservednam:10,resourc:[8,9,10,11,16,20],respect:14,respons:15,rest:14,restrictviol:10,result:[0,1,6,7,8,9,11,15,17,18],retriev:[0,8,20],revert:18,review:8,rewritten:11,right:[0,1,7,14,18,19],robust:14,role:[10,19],roll:[6,7,18],rollback:[6,10,18,20],roughli:[14,20],roundtrip:8,rourk:17,routin:10,row:[8,9,15],rowcount:8,rownumb:8,rule:[1,7,10,17],run:[4,9,13,14,15,18],runtim:14,safe:17,same:[1,4,6,7,8,9,14,15,16,18,20],sampl:7,sanitis:1,save_number_of_success:18,savepoint:[6,10,18],savepoint_nam:6,savepointexcept:10,scalabl:9,scalar:0,scale:8,scatter:4,scene:9,schema:[10,17,19],schema_nam:[10,15],schemaanddatastatementmixingnotsupport:10,scope:1,scratch:1,script:18,scroll:[8,9],scrollabl:8,seamlessli:19,search:5,second:14,section:1,secur:[17,18],seduc:14,see:[0,4,6,7,8,11,14,15,20],seen:[4,15],select:[0,4,6,8,9,11,14,15,17,18,19,20],self:[8,13,19],semant:[8,11],semicolon:11,send:[4,6,8,9,11,14,20],sens:1,sent:[6,8,10,14,15],separ:[8,11,14,17],seq:17,sequenc:[0,6,7,8,14,17,19],sequencegeneratorlimitexceed:10,seri:18,serial:[0,19,20],serialis:19,serializationfailur:10,seriou:17,server:[1,6,8,10,12,14,15,16,18],servercursor:[6,9],session:[0,4,6,8,16,18,20],set:[0,6,8,9,11,15,16,19],set_autocommit:6,set_client_encod:6,set_config:11,set_json_dump:[0,19],set_json_load:[0,19],set_typ:[7,8],setter:6,sever:[0,1,4,8,10,11,14,15,16,18,20],severity_nonloc:[10,15],share:[6,8],should:[0,1,4,6,8,9,11,13,14,15,17],shouldn:[1,14],show:[0,15,20],sibl:9,side:[1,6,8,10,12,14],signal:19,signatur:7,similar:[6,8,9,11,17,19],simpl:[14,18,19],simplest:4,simpli:13,simplist:11,singl:[10,11,14,15,17],single_tupl:15,singletonsqljsonitemrequir:10,sit:14,site:14,situat:13,size:[8,9],slightli:11,small:9,smaller:0,smallint:[0,1],snapshot:10,snapshottooold:10,snip:17,snippet:17,socket:15,some:[0,1,4,7,8,13,14,17,19,20],some_t:[14,17],someth:[6,7,9],sometim:[0,9,11,14],somewhat:17,somewher:17,soon:[6,18],sort:17,sourc:[10,14,17],source_fil:[10,15],source_funct:[10,15],source_lin:[10,15],special:6,specialis:19,specif:[1,10,15],specifi:[0,1,6,7,8,10,14,17,18,19],sql:[0,1,3,5,6,7,8,9,10,11,15,16,20],sql_ascii:[0,6],sqlclientunabletoestablishsqlconnect:10,sqlite3:20,sqljsonarraynotfound:10,sqljsonmembernotfound:10,sqljsonnumbernotfound:10,sqljsonobjectnotfound:10,sqljsonscalarrequir:10,sqlroutineexcept:10,sqlserverrejectedestablishmentofsqlconnect:10,sqlstate:15,sqlstatementnotyetcomplet:10,srfprotocolviol:10,stack:18,stackeddiagnosticsaccessedwithoutactivehandl:10,standard:[0,10],start:[6,12,13,15,18],state:[1,6,8,9,10,15,18],statement:[2,6,7,8,10,14,17],statement_posit:[10,15],statementcompletionunknown:10,statementtoocomplex:10,statu:15,stdin:7,stdout:7,steal:[8,14],step:4,still:[4,7,8,10,13,17],stop:[4,8,18],store:[0,9,16,18],str:[0,1,6,7,8,10,14,15,17,19],stream:[7,8,15],stress:14,strict:12,string:[1,3,6,7,8,10,14,15,19],stringdatalengthmismatch:10,stringdatarighttrunc:10,strong:12,strtest:0,structur:11,stuff:1,style:17,subclass:[0,1,10,17,19],subdirectori:13,subject:7,substringerror:10,subtl:14,subtyp:19,subtype_oid:19,success:15,successfulli:18,sudo:13,suggest:11,suitabl:[7,9,17],sunglass:14,support:[4,8,10,11,12,14,15,17,19],suppos:13,supprt:8,sure:[0,16,18,20],surpris:[11,18],suspend:18,symbol:0,sync:[4,6,7,10],syntax:[0,8,10,11,14],syntaxerror:[10,11,14],syntaxerrororaccessruleviol:10,system:[1,10,13,14,15,16,19],systemerror:10,tabl:[0,8,10,14,17,18,20],table_nam:[7,10,15,17],tail:8,take:[0,6,9,14],taken:[8,18],tape:14,target:[0,8,18],tbl:17,tell:1,templat:17,termin:[8,10,18,20],terribl:14,test:[4,9,20],text:[0,1,7,8,14,15,20],textual:14,than:[0,1,4,8,9,10,15,16,17],thank:7,thei:[1,4,6,7,8,9,10,11,14,17,18,20],them:[0,1,4,6,7,9,11,14,17,19,20],thi:[0,1,4,6,7,8,9,10,11,13,14,15,17,18,19,20],thing:[0,4,13],though:[8,13],thread:6,three:14,thu:1,time:[0,4,6,8,9,14,16,17,18],timedelta:0,timestamp:0,timestamptz:[0,8],timetz:0,timezon:11,todo:6,togeth:19,toilet:14,token:15,too:[0,8,13,14,17],tool:15,toomanyargu:10,toomanycolumn:10,toomanyconnect:10,toomanyjsonarrayel:10,toomanyjsonobjectmemb:10,toomanyrow:10,topic:[11,12,20],traceback:0,track:9,transact:[4,5,6,7,8,10,11,15,20],transactionintegrityconstraintviol:10,transactionresolutionunknown:10,transactionrollback:10,transactionstatu:15,transfer:[9,15],transform:1,transmit:9,transpar:18,trasform:1,tri:11,trigger:10,triggeredactionexcept:10,triggereddatachangeviol:10,triggerprotocolviol:10,trimerror:10,troubleshoot:13,tupl:[0,7,8,11,14,15,19],tuples_ok:15,two:[4,14,18],tx1:18,tx2:18,type:[2,3,5,6,7,8,10,11,12,14,17,20],type_cod:8,typeinfo:[1,19],typic:14,ujson:0,unaffect:18,unalt:0,unauthor:14,unbalanc:18,unbound:0,uncommit:8,undefin:1,undefinedcolumn:10,undefinedfil:10,undefinedfunct:[0,10,11],undefinedobject:10,undefinedparamet:10,undefinedt:10,under:10,undergo:[0,17],underli:19,understood:[1,15],undesir:18,unescap:14,unexpect:[0,10],union:[1,6,8,15,17,19],uniqueviol:10,unknown:[0,15],unless:[6,7,8,18],unlik:[14,15],unpack:8,unpars:[7,8,14],unregist:6,unreliable_oper:18,unsafenewenumvalueusag:10,unterminatedcstr:10,until:[6,8,18],untouch:17,untranslatablecharact:[0,10],untrust:[14,17],updat:8,upgrad:13,upon:4,url:6,usabl:15,usag:[4,5,11,13],use:[0,1,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],used:[0,1,4,6,8,9,10,11,12,13,14,15,16,17,19],useful:[1,4,8,17],user:[4,20],uses:[0,6,8,9,11,14,16],using:[0,1,4,6,7,8,9,11,14,15,17,18,19,20],usual:[1,6,7,9,10,11,14,15,17],utc:11,utf8:[0,15],utf:0,util:15,uuid:[0,1,11],vacuum:18,valid:[4,10],valu:[0,1,4,6,7,8,10,14,15,17,19,20],valueerror:18,varchar:[0,8],variabl:[6,14,17],variou:19,veri:9,verifi:18,version:[1,6,10,13,15],via:[13,14],view:[1,8],violat:10,visibl:18,wai:[0,1,4,7,8,13,14,16,17,18],wait:[15,17],want:[0,1,6,7,8,14,17,18],warn:[1,10,15],wasn:16,weak:17,web:14,well:1,were:6,what:[0,4,6,8,9,10,14],when:[0,1,4,6,7,8,9,10,11,14,15,16,17,18],whenev:[4,6,14],where:[0,1,4,9,14,17,18],wherea:[11,14],which:[0,1,4,6,7,8,9,10,11,13,15,17],who:[12,14],whole:9,whose:[1,17],widespread:14,windowingerror:10,wire:14,wise:11,wish:4,withcheckoptionviol:10,within:[1,6],without:[1,6,8,13],won:[1,17],work:[0,1,7,11,13,15,17],world:7,would:[7,8,9,11,18],wrap:[0,8,11,17,19],wrapper:[0,3,6,7,10,11],writabl:6,write:[6,8,10,11,14,15,18],write_row:[7,8],wrong:[10,14],wrongobjecttyp:10,x82:0,xa8m:0,xa9e:0,xac:0,xbbl:0,xc3:0,xe2:0,xx000:10,xx001:10,xx002:10,yet:[10,13,18],yield:6,you:[0,1,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20],your:[0,1,6,13,14,17,19],yourselv:7,zero:[0,10],zerolengthcharacterstr:10},titles:["Adaptation between Python and PostgreSQL types","Data adaptation configuration","Advanced topics","<code class=\"docutils literal notranslate\"><span class=\"pre\">psycopg3</span></code> API","Async operations","Getting started with <code class=\"docutils literal notranslate\"><span class=\"pre\">psycopg3</span></code>","Connection classes","Using COPY TO and COPY FROM","Cursor classes","Cursor types","<code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">errors</span></code> \u2013 package exceptions","Differences from <code class=\"docutils literal notranslate\"><span class=\"pre\">psycopg2</span></code>","Psycopg 3 \u2013 PostgreSQL database adapter for Python","Installation","Passing parameters to SQL queries","<code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">pq</span></code> \u2013 libpq wrapper module","Prepared statements","<code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">sql</span></code> \u2013 SQL string composition","Transaction management","<code class=\"xref py py-obj docutils literal notranslate\"><span class=\"pre\">types</span></code> \u2013 types mapping and adaptation","Basic module usage"],titleterms:{"boolean":0,"class":[6,8],"function":[15,17],"int":11,"new":11,The:[6,8],Using:7,adapt:[0,1,11,12,19],advanc:2,api:[3,10],argument:14,async:4,asyncconnect:6,asynccursor:8,asynchron:[4,7],asyncservercursor:8,autocommit:18,base:11,basic:20,between:0,binari:[0,13,14],bind:11,block:[7,18],callproc:11,client:9,column:8,composit:17,configur:1,connect:[4,6,11],content:15,copi:[7,8,11],cursor:[8,9],cycl:1,danger:14,data:[1,7],databas:12,descript:8,develop:13,differ:11,document:12,dumper:1,enumer:15,error:10,except:10,execut:14,exist:9,file:11,from:[7,11],get:5,gone:11,implement:15,indic:[5,12],inform:19,inject:14,instal:13,involv:1,json:[0,19],libpq:[13,15],life:1,loader:1,local:13,main:20,manag:18,map:19,modul:[15,17,20],more:11,notif:4,number:0,object:[1,6,8,15,17,19,20],oper:4,packag:10,paramet:14,pass:14,postgresql:[0,12],prepar:16,psycopg2:11,psycopg3:[3,5,11,13,20],psycopg:12,pure:13,python:[0,12,13],queri:14,read:7,relat:8,result:14,row:7,server:[9,11],servercursor:8,side:[9,11],sql:[14,17],sqlstate:10,start:5,state:13,statement:16,steal:9,stricter:11,string:[0,17],structur:15,support:[6,7],system:11,tabl:[5,12],todo:[0,1,8,11,13,14,15,19],topic:2,transact:18,type:[0,1,9,19],usag:[17,20],util:17,what:11,wrap:15,wrapper:[15,19],write:7}})